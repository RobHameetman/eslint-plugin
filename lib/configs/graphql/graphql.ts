import { Linter } from 'eslint';
import graphqlPlugin from 'eslint-plugin-graphql';
import * as importPlugin from 'eslint-plugin-import';
import { USING_RECOMMENDED } from '@/utils/constants/misc/USING_RECOMMENDED';

export default [
	{
		name: `${process.env.npm_package_name}/graphql`,
		plugins: {
			['graphql']: graphqlPlugin,
			...(process.env.NODE_ENV === 'test' ? {} : { ['import']: importPlugin, }),
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
