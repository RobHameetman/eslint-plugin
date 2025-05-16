import { Linter } from 'eslint';
import eslint from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import noSecretsPlugin from 'eslint-plugin-no-secrets';
import noUnsanitizedPlugin from 'eslint-plugin-no-unsanitized';
import securityPlugin from 'eslint-plugin-security';
import { IS_DEV } from '@/utils/constants/check/IS_DEV';
import { IS_MODULE } from '@/utils/constants/check/IS_MODULE';
import { IS_BROWSER } from '@/utils/constants/check/IS_BROWSER';
import { USING_PRETTIER } from '@/utils/constants/deps/USING_PRETTIER';
import { USING_SERVICE_WORKER } from '@/utils/constants/deps/USING_SERVICE_WORKER';
import { USING_RECOMMENDED } from '@/utils/constants/misc/USING_RECOMMENDED';
// import { usingRecommended } from '@/utils/functions/misc/usingRecommended';
import { flatten } from '@/utils/functions/misc/flatten';

export const extendsConfigs = [
	eslint.configs.recommended,
	...flatten(importPlugin.configs?.recommended),
	...(USING_PRETTIER && !USING_RECOMMENDED ? flatten(prettierPlugin.configs?.recommended, { fixup: true }) : []),
];

export default [
	...(USING_RECOMMENDED ? [] : extendsConfigs),
	{
		name: `${process.env.npm_package_name}/core`,
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: IS_MODULE ? 'module' : 'script',
			globals: {
				...globals.es2021,
				...(!IS_MODULE ? globals.commonjs : {}),
				...globals[IS_BROWSER ? 'browser' : 'node'],
				...(IS_DEV ? globals.devtools : {}),
				...(!USING_SERVICE_WORKER ? globals.serviceworker : {}),
			},
		},
		plugins: {
			['import']: importPlugin,
			['no-secrets']: noSecretsPlugin,
			['no-unsanitized']: noUnsanitizedPlugin,
			['security']: securityPlugin,
		},
		/**
		 * Note: use only semantic values for rules (i.e. 'off', 'warn', 'error')
		 * rather than numeric values.
		 */
		rules: {
			/**
			 * ESLint Core
			 */
			['brace-style']: ['error', '1tbs', { allowSingleLine: true }],
			['camelcase']: ['error', { allow: ['^(__)?[A-Z]{1,}(_[A-Z]{1,})*(__)?$'] }],
			['comma-dangle']: ['error', 'always-multiline'],
			['comma-spacing']: 'error',
			['curly']: ['error', 'all'],
			['explicit-function-return-type']: 'off',
			['explicit-member-accessibility']: 'off',
			['explicit-module-boundary-types']: 'off',
			['func-call-spacing']: ['error', 'never'],
			['generator-star-spacing']: [
				'error',
				{ before: false, after: true },
			],
			['keyword-spacing']: 'error',
			['lines-between-class-members']: 'error',
			['no-console']: [
				IS_DEV ? 'warn' : 'error',
				{ allow: ['warn', 'error', 'info'] },
			],
			['no-dupe-class-members']: 'error',
			['no-restricted-imports']: 'warn',
			['no-multiple-empty-lines']: ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
			['no-redeclare']: 'error',
			['no-shadow']: 'error',
			['no-undef']: IS_DEV ? 'warn' : 'error',
			['no-use-before-define']: 'off',
			['no-useless-constructor']: 'error',
			['no-unused-vars']: [
				IS_DEV ? 'warn' : 'error',
				{
					argsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^ignore',
					varsIgnorePattern: '^_',
				},
			],
			['padding-line-between-statements']: [
				'error',
				{
					blankLine: 'always',
					prev: 'directive',
					next: '*',
				},
				{
					blankLine: 'always',
					prev: ['*'],
					next: ['block-like'],
				},
				{
					blankLine: 'always',
					prev: ['block-like'],
					next: ['*'],
				},
				{
					blankLine: 'always',
					prev: '*',
					next: ['return', 'break', 'continue'],
				},
				{
					blankLine: 'always',
					prev: ['const', 'let', 'var'],
					next: '*',
				},
				{
					blankLine: 'any',
					prev: ['const', 'let', 'var'],
					next: ['const', 'let', 'var'],
				},
				{
					blankLine: 'always',
					prev: ['multiline-const', 'multiline-let', 'multiline-var'],
					next: '*',
				},
				{
					blankLine: 'never',
					prev: ['singleline-const', 'singleline-let', 'singleline-var'],
					next: ['singleline-const', 'singleline-let', 'singleline-var'],
				},
				{
					blankLine: 'always',
					prev: ['import', 'cjs-import'],
					next: '*',
				},
				{
					blankLine: 'any',
					prev: ['import', 'cjs-import'],
					next: ['import', 'cjs-import'],
				},
				{
					blankLine: 'always',
					prev: ['*'],
					next: ['export', 'cjs-export'],
				},
				{
					blankLine: 'any',
					prev: ['export', 'cjs-export'],
					next: ['export', 'cjs-export'],
				},
			],
			['prefer-template']: 'error',
			['quotes']: ['error', 'single'],
			['require-await']: 'off',
			['no-return-await']: 'error',
			['semi']: ['error', 'always'],
			['space-before-blocks']: 'error',
			['space-before-function-paren']: [
				'error',
				{ asyncArrow: 'always', anonymous: 'never', named: 'never' },
			],
			/**
			 * plugin:import
			 */
			['import/default']: !IS_MODULE ? 'off' : 'error',
			['import/export']: 'error',
			['import/extensions']: ['error', 'never', {
				md: 'always',
				mdx: 'always',
				svg: 'always',
				txt: 'always',
			}],
			['import/first']: 'error',
			['import/named']: 'error',
			['import/namespace']: 'error',
			['import/no-anonymous-default-export']: 'error',
			['import/no-default-export']: 'error',
			['import/no-duplicates']: ['error', {
				['prefer-inline']: true
			}],
			['import/no-named-as-default']: 'error',
			['import/no-named-as-default-member']: 'error',
			['import/no-self-import']: 'error',
			['import/no-unresolved']: IS_MODULE ? 'error' : ['error', {
				commonjs: true,
			}],
			['import/order']: [
				'error', {
					alphabetize: {
						order: 'asc',
					},
					groups: [
						'builtin',
						'external',
						'internal',
						'index',
						'sibling',
						'parent',
						'type',
						'object',
						'unknown',
					],
					['newlines-between']: 'never',
					pathGroups: [
						{
							pattern: 'lodash?(-es)',
							group: 'builtin',
							position: 'before'
						},
						{
							pattern: 'lodash/*',
							group: 'builtin',
							position: 'before'
						},
					],
					pathGroupsExcludedImportTypes: [
						'react',
						'react-dom',
						'react-router',
						'react-router-dom',
					],
					warnOnUnassignedImports: true,
				},
			],
			/**
			 * plugin:@rob.hameetman/
			 */
			/**
			 * TODO: Add custom rules here.
			 *
			 * @example
			 * ['@rob.hameetman/custom-rule-example']: 'error',
			 */
		},
		settings: {
			'import/extensions': [
				'.js',
			],
			'import/resolver': {
				node: {
					extensions: [
						'.js',
					],
				},
			},
		},
	},
	/**
	 * Allow default exports in `index.js`, in TypeScript type declaration
	 * files, in MFE remotes and other lazy-loaded resources, and in config
	 * files like `webpack.config.js`, `rollup.config.js`, etc.
	 */
	{
		files: [
			'**/*.config.js',
			'**/shared/**/!(*.spec).js',
			'**/*.(remote|lazy).js',
			'**/Lazy*.js',
			'**/*Remote.js',
			'index.js',
		],
		plugins: {
			['import']: importPlugin,
		},
		rules: {
			['import/no-default-export']: 'off',
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
			['dot-notation']: 'off',
			['no-empty-function']: 'off',
			['no-proto']: 'off',
			['no-useless-constructor']: 'off',
		},
	},
] as Linter.FlatConfigArray;
