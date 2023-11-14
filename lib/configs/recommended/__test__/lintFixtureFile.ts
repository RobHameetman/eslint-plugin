import fs from 'fs';
import { ESLint } from 'eslint';
import { ConfigModule } from './ConfigModule';

process.env.DEBUG = '*';

export const lintFixtureFile = async (
	filePath = `${process.cwd()}/lib/configs/recommended/recommended.ts`,
) => {
	const seed = String(Date.now());
	const uncachedPath = `${process.cwd()}/lib/configs/recommended/__test__/recommended.${seed}.ts`;

	try {
		fs.copyFileSync(filePath, uncachedPath);

		const { recommended: baseConfig } = await import(uncachedPath) as ConfigModule;

		// console.log((baseConfig.overrides || [])[1]);

		const eslint = new ESLint({
			baseConfig: {
				...baseConfig,
				root: true,
			},
			extensions: [
				'.js',
				'.jsx',
				'.ts',
				'.tsx',
				// '.gql',
				// '.graphql',
			],
			useEslintrc: false,
		});

		const fixturePath = process.env.PACKAGE_JSON
			? `${process.cwd()}/test/resources/fixtures/${process.env.PACKAGE_JSON.split('/').at(-2)}`
			: `${process.cwd()}/test/resources/fixtures/all`;

		// console.log(fixturePath);

		const [result] = await eslint.lintFiles(fixturePath);

		result.config = baseConfig;

		fs.unlinkSync(uncachedPath);

		return () => result;
	} catch (e) {
		if (fs.existsSync(uncachedPath)) {
			fs.unlinkSync(uncachedPath);
		}

		return () => { throw e; };
	}
};
