import { Linter } from 'eslint';
import globals from 'globals';
import cypressPlugin from 'eslint-plugin-cypress';
import { IS_MODULE } from '@/utils/constants/check/IS_MODULE';
import { flatten } from '@/utils/functions/misc/flatten';

const extendsConfigs = [
	...flatten(cypressPlugin.configs?.recommended),
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
