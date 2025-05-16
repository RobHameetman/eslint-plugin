import { Linter } from 'eslint';
import core from '../core';
import cypress from '../cypress';
import graphql from '../graphql';
import j from '../jest';
import prettier from '../prettier';
import react from '../react';
import typescript from '../typescript';
import { USING_CYPRESS } from '@/utils/constants/deps/USING_CYPRESS';
import { USING_GRAPHQL } from '@/utils/constants/deps/USING_GRAPHQL';
import { USING_JEST } from '@/utils/constants/deps/USING_JEST';
import { USING_PRETTIER } from '@/utils/constants/deps/USING_PRETTIER';
import { USING_REACT } from '@/utils/constants/deps/USING_REACT';
import { USING_TYPESCRIPT } from '@/utils/constants/deps/USING_TYPESCRIPT';

process.env.USING_RECOMMENDED = 'true';

const plugin = process.env.npm_package_name || '@rob.hameetman/eslint-plugin';

export default [
	...core,
	...(USING_TYPESCRIPT ? typescript : []),
	...(USING_REACT ? react : []),
	...(USING_GRAPHQL ? graphql : []),
	...(USING_JEST ? j : []),
	...(USING_CYPRESS ? cypress : []),
	/**
	 * Recommended settings for custom rules.
	 */
	{
		name: `${plugin}/custom`,
		files: [
			'**/*.[jt]s?(x)',
		],
		plugins: {
			get [plugin]() {
				return {
					rules: {
						/**
						 * Rules need to be imported dynamically to avoid circular dependencies.
						 */
						'custom-rule-example': import('@/rules/custom-rule-example'),
					},
				};
      }
		},
		rules: {
			[`${plugin}/custom-rule-example`]: 'error',
		},
	}
] as Linter.FlatConfigArray;
