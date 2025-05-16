import { Linter } from 'eslint';
import globals from 'globals';
import cypressPlugin from 'eslint-plugin-cypress';
import { IS_MODULE } from '@/utils/constants/check/IS_MODULE';
// import { USING_PRETTIER } from '@/utils/constants/deps/USING_PRETTIER';
// import { USING_RECOMMENDED } from '@/utils/constants/misc/USING_RECOMMENDED';
import { flatten } from '@/utils/functions/misc/flatten';
// import { isImported } from '@/utils/functions/misc/isImported';

// const { extendsCoreConfigs = [], default: core = {} } = USING_RECOMMENDED ? {} : (await import('@/configs/core'));
// const { default: prettier = {} } = USING_PRETTIER && !USING_RECOMMENDED ? (await import('@/configs/prettier')) : {};

const extendsConfigs = [
	// ...extendsCoreConfigs,
	...flatten(cypressPlugin.configs?.recommended),
	// ...(isImported(core) ? [core] : []),
	// ...(isImported(prettier) ? [prettier] : []),
];

export default [
	...extendsConfigs,
	{
		name: `${process.env.npm_package_name}/cypress`,
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: IS_MODULE ? 'module' : 'script',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			/**
			 * @see https://github.com/cypress-io/eslint-plugin-cypress/blob/c5b206b8e97a0c5d5bf33fe4e807de3eb02fbf6b/index.js#L20
			 */
			globals: {
				cy: false,
				Cypress: false,
				expect: false,
				assert: false,
				chai: false,
				...globals.browser,
				...globals.mocha,
			},
		},
		plugins: {
			['cypress']: cypressPlugin,
		},
		files: [
			'**/{cypress,e2e}/**/*.cy.[jt]s',
		],
	},
] as Linter.FlatConfigArray;
