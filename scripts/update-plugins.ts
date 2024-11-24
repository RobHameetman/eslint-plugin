import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import * as eslintPluginImport from 'eslint-plugin-import';
import * as removedRulesJson from '../test/jest/matchers/toAvoidRemovedRules/removed-rules.json';

const REMOVED_RULES_FILE = path.join(process.cwd(), 'test/jest/matchers/toAvoidRemovedRules/removed-rules.json');

const PLUGINS = [
	'@eslint/js',
	'eslint-plugin-cypress',
	'eslint-plugin-graphql',
	'eslint-plugin-import',
	'eslint-plugin-jest',
	'eslint-plugin-jest-async',
	'eslint-plugin-jsx-a11y',
	'eslint-plugin-no-secrets',
	'eslint-plugin-no-unsanitized',
	'eslint-plugin-node',
	'eslint-plugin-prettier',
	'eslint-plugin-promise',
	'eslint-plugin-react',
	'eslint-plugin-react-hooks',
	'eslint-plugin-security',
	'eslint-plugin-tailwindcss',
	'eslint-plugin-testing-library',
];

type RemovedRules = Record<string, ReadonlyArray<string>>;

const getLatestVersion = async (pluginName: string) => {
  const response = await fetch(`https://registry.npmjs.org/${pluginName}/latest`);
	const { version } = await response.json();

  return version;
}

const getCurrentVersion = async (pluginName: string) => {
  const packageJson = JSON.parse(fs.readFileSync(path.join('node_modules', pluginName, 'package.json'), 'utf8'));

  return packageJson.version;
}

const updateESLintPlugin = async (pluginName: string) => {
  console.info(`Updating ${pluginName}...`);

	const currentVersion = await getCurrentVersion(pluginName);
  const latestVersion = await getLatestVersion(pluginName);

  if (currentVersion === latestVersion) {
    console.info(`${pluginName} is already up-to-date.`);

    return;
  }

  console.info(`Updating ${pluginName} from version ${currentVersion} to ${latestVersion}...`);

	const { default: currentPlugin } = await import(pluginName);
  const currentRules = Object.keys(pluginName === '@eslint/js' ? plugin.configs.all.rules : plugin.rules);

  execSync(`npm install ${pluginName}@latest`);

	const { default: updatedPlugin } = await import(pluginName);
	console.log(updatedPlugin);

  const updatedRules = Object.keys((await import(pluginName)).rules);
  const removedRules = [...new Set(currentRules.filter(rule => !updatedRules.includes(rule)))];

  if (!removedRulesJson[pluginName]) {
    removedRulesJson[pluginName] = [];
  }

  removedRulesJson[pluginName] = [...new Set([...removedRulesJson[pluginName], ...removedRules])];

  fs.writeFileSync(REMOVED_RULES_FILE, JSON.stringify(removedRulesJson, null, 2));

  try {
    execSync('npm test', { stdio: 'inherit' });
  } catch (error) {
    console.error(`Tests failed after updating: "${pluginName}"`);
    process.exit(1);
  }

  console.info(`${pluginName} updated successfully.`);
}

const updateAllPlugins = async () => {
  for (const plugin of PLUGINS) {
    await updateESLintPlugin(plugin);
  }

  console.log('All plugins updated successfully.');
}

updateAllPlugins().catch(error => {
  console.error('An error occurred:', error);
});
