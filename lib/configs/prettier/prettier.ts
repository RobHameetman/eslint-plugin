import { Linter } from 'eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import { flatten } from '@/utils/functions/misc/flatten';

const extendsConfigs = [
	...flatten(prettierPlugin.configs?.recommended),
];

export default [
	...extendsConfigs,
	{
		name: `${process.env.npm_package_name}/prettier`,
		plugins: {
			['prettier']: prettierPlugin,
		},
		/**
		 * Note: use only semantic values for rules (i.e. 'off', 'warn', 'error')
		 * rather than numeric values.
		 */
		rules: {
			['prettier/prettier']: 'error',
		},
	}
] as Linter.FlatConfigArray;
