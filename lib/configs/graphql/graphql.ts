import { Linter } from 'eslint';
import graphqlPlugin from '@graphql-eslint/eslint-plugin';
import * as importPlugin from 'eslint-plugin-import';

export default [
	{
		name: `${process.env.npm_package_name}/graphql`,
		languageOptions: {
			parser: graphqlPlugin.parser,
		},
		plugins: {
			'@graphql-eslint': graphqlPlugin,
			...(process.env.NODE_ENV === 'test' ? {} : { import: importPlugin, }),
		},
		files: [
			'**/*.g?(raph)ql',
		],
		rules: {
			'import/extensions': ['error', 'never', {
				gql: 'always',
				graphql: 'always',
			}],
		},
		settings: {
			'import/extensions': [
				'.gql',
				'.graphql',
			],
			'import/resolver': {
				node: {
					extensions: [
						'.gql',
						'.graphql',
					],
				},
			},
		}
	},
] as Linter.FlatConfigArray;
