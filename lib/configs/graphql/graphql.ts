import { Linter } from 'eslint';
import graphqlPlugin from 'eslint-plugin-graphql';
import * as importPlugin from 'eslint-plugin-import';

export default [
	{
		name: `${process.env.npm_package_name}/graphql`,
		plugins: {
			['graphql']: graphqlPlugin,
			['import']: importPlugin,
		},
		files: [
			'**/*.g?(raph)ql',
		],
		rules: {
			['import/extensions']: ['error', 'never', {
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
