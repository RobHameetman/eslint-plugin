import { Linter } from 'eslint';
import globals from 'globals';
import * as jsparser from 'espree';
import jestPlugin from 'eslint-plugin-jest';
import jestAsyncPlugin from 'eslint-plugin-jest-async';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import tsEslint from 'typescript-eslint';
import { IS_DEV } from '@/utils/constants/check/IS_DEV';
import { USING_RECOMMENDED } from '@/utils/constants/misc/USING_RECOMMENDED';
import { USING_TESTING_LIBRARY } from '@/utils/constants/deps/USING_TESTING_LIBRARY';
import { USING_TESTING_LIBRARY_DOM } from '@/utils/constants/deps/USING_TESTING_LIBRARY_DOM';
import { USING_TESTING_LIBRARY_REACT } from '@/utils/constants/deps/USING_TESTING_LIBRARY_REACT';
import { USING_TYPESCRIPT } from '@/utils/constants/deps/USING_TYPESCRIPT';
import { flatten } from '@/utils/functions/misc/flatten';

/**
 * Doing this fixes an issue causing the test for the recommended config to fail
 * with the following error:
 *
 * ```
 * Error: Error while loading rule '@typescript-eslint/await-thenable': You have
 * used a rule which requires parserServices to be generated. You must therefore
 * provide a value for the "parserOptions.project" property for
 * @typescript-eslint/parser.
 *
 * Parser: undefined
 * ```
 */
const jestRecommendedConfig = {
	...jestPlugin.configs?.['flat/recommended'],
	languageOptions: {
		parser: USING_TYPESCRIPT ? tsEslint.parser : jsparser,
		parserOptions: USING_TYPESCRIPT ? {
			project: true,
			tsconfigRootDir: import.meta.dirname,
		} : {},
		globals: (jestPlugin.configs?.['flat/recommended'] as Linter.FlatConfig).languageOptions?.globals,
	},
};

const extendsConfigs = [
	jestRecommendedConfig,
	...(USING_TESTING_LIBRARY_DOM ? flatten(testingLibraryPlugin.configs?.dom) : []),
	...(USING_TESTING_LIBRARY_REACT ? flatten(testingLibraryPlugin.configs?.react) : []),
];

export default [
	...extendsConfigs,
	{
		name: `${process.env.npm_package_name}/jest`,
		languageOptions: {
			parser: USING_TYPESCRIPT ? tsEslint.parser : jsparser,
			parserOptions: USING_TYPESCRIPT ? {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			} : {},
			globals: {
				...globals.mocha,
				...globals.jest,
			},
		},
		plugins: {
			['jest']: jestPlugin,
			['jest-async']: jestAsyncPlugin,
			...(USING_TESTING_LIBRARY ? {
				['testing-library']: testingLibraryPlugin,
			} : {}),
		},
		files: [
			'**/*.spec.[jt]s?(x)',
		],
		ignores: [
			'**/{cypress,e2e}/**/*.cy.[jt]s'
		],
		rules: {
			/**
			 * plugin:testing-library
			 */
			...(USING_TESTING_LIBRARY ? {
				['testing-library/consistent-data-testid']: ['error', {
					testIdPattern: '^(?:[A-Za-z1-9]+_)*[A-Za-z1-9]+$',
					testIdAttribute: 'data-test-id',
				}],
				['testing-library/no-container']: 'warn',
				['testing-library/no-node-access']: 'off',
				['testing-library/no-render-in-setup']: 'off',
				['testing-library/prefer-screen-queries']: 'error',
			} : {}),
			/**
			 * plugin:jest
			 */
			['jest/consistent-test-it']: ['error', {
				fn: 'it',
				withinDescribe: 'it',
			}],
			['jest/expect-expect']: 'error',
			['jest/max-nested-describe']: ['error', { max: 5 }],
			['jest/no-commented-out-tests']: IS_DEV ? 'warn' : 'error',
			['jest/no-conditional-expect']: 'error',
			['jest/no-conditional-in-test']: 'off',
			['jest/no-deprecated-functions']: 'warn',
			['jest/no-done-callback']: IS_DEV ? 'warn' : 'error',
			['jest/no-duplicate-hooks']: 'error',
			['jest/no-export']: 'error',
			['jest/no-focused-tests']: IS_DEV ? 'warn' : 'error',
			['jest/no-hooks']: ['error', { allow: ['beforeEach', 'afterEach']}],
			['jest/no-identical-title']: 'error',
			['jest/no-interpolation-in-snapshots']: 'error',
			['jest/no-jasmine-globals']: 'error',
			// ['jest/no-jest-import']: IS_DEV ? 'warn' : 'error',
			['jest/no-mocks-import']: 'error',
			['jest/no-standalone-expect']: 'error',
			['jest/no-test-prefixes']: 'error',
			['jest/no-test-return-statement']: 'error',
			['jest/prefer-called-with']: 'off',
			['jest/prefer-comparison-matcher']: 'error',
			['jest/prefer-equality-matcher']: 'error',
			['jest/prefer-expect-resolves']: IS_DEV ? 'warn' : 'error',
			['jest/prefer-hooks-on-top']: 'error',
			['jest/prefer-lowercase-title']: [
				'error',
				{ ignoreTopLevelDescribe: true },
			],
			['jest/prefer-snapshot-hint']: ['warn', 'multi'],
			['jest/prefer-spy-on']: 'error',
			['jest/prefer-to-be']: 'error',
			['jest/prefer-to-contain']: 'error',
			['jest/prefer-to-have-length']: 'error',
			['jest/prefer-todo']: 'warn',
			['jest/require-hook']: 'error',
			['jest/require-top-level-describe']: 'error',
			['jest/valid-describe-callback']: 'error',
			['jest/valid-expect']: 'error',
			['jest/valid-expect-in-promise']: 'error',
			['jest/valid-title']: ['error', {
				ignoreTypeOfDescribeName: true,
				mustMatch: {
					it: '^should ',
				},
			}],
		},
	},
	/**
	 * Override other ESLint rules in Jest tests and adjacent resources.
	 */
	{
		files: [
			'**/*.spec.[jt]s?(x)',
			'**/__test__/**/*.[jt]s?(x)',
		],
		ignores: [
			'**/{cypress,e2e}/**/*.cy.[jt]s'
		],
		rules: {
			// ...(USING_TYPESCRIPT ? {
			// 	['@typescript-eslint/dot-notation']: 'off',
			// 	['@typescript-eslint/naming-convention']: 'off',
			// 	['@typescript-eslint/no-empty-function']: 'off',
			// 	['@typescript-eslint/no-empty-interface']: 'off',
			// 	['@typescript-eslint/no-useless-constructor']: 'off',
			// } : {}),
			// ...(USING_REACT ? {
			// 	['react/jsx-no-useless-fragment']: 'off',
			// } : {}),
			['dot-notation']: 'off',
			['no-empty-function']: 'off',
			['no-proto']: 'off',
			['no-useless-constructor']: 'off',
		}
	}
] as Linter.FlatConfigArray;
