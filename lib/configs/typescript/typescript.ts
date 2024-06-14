import { Linter } from 'eslint';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import { IS_BROWSER } from '@/utils/constants/check/IS_BROWSER';
import { IS_DEV } from '@/utils/constants/check/IS_DEV';
import { IS_MODULE } from '@/utils/constants/check/IS_MODULE';
import { USING_SERVICE_WORKER } from '@/utils/constants/deps/USING_SERVICE_WORKER';
import { ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES } from '@/utils/constants/misc/ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES';
import { ALLOWED_TYPE_NAMING_PREFIXES } from '@/utils/constants/misc/ALLOWED_TYPE_NAMING_PREFIXES';
import { ALWAYS_ALLOWED_NAMING_PREFIXES } from '@/utils/constants/misc/ALWAYS_ALLOWED_NAMING_PREFIXES';
import { flatten } from '@/utils/functions/misc/flatten';

const extendsConfigs = [
	...tsEslint.configs.strictTypeChecked,
	...tsEslint.configs.stylisticTypeChecked,
	...flatten(importPlugin.configs?.recommended),
	...flatten(importPlugin.configs?.typescript),
];

export default [
	...extendsConfigs,
	{
		name: `${process.env.npm_package_name}/typescript`,
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: IS_MODULE ? 'module' : 'script',
			parser: tsEslint.parser,
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
			globals: {
				...globals.es2021,
				...(!IS_MODULE ? globals.commonjs : {}),
				...globals[IS_BROWSER ? 'browser' : 'node'],
				...(IS_DEV ? globals.devtools : {}),
				...(!USING_SERVICE_WORKER ? globals.serviceworker : {}),
			},
		},
		plugins: {
			['@typescript-eslint']: tsEslint.plugin,
			['import']: importPlugin,
		},
		files: [
			'**/*.ts?(x)',
		],
		/**
		 * Note: use only semantic values for rules (i.e. 'off', 'warn', 'error')
		 * rather than numeric values.
		 */
		rules: {
			/**
			 * Enable @typescript-eslint/ rules
			 */
			['@typescript-eslint/array-type']: ['error', { default: 'generic' }],
			['@typescript-eslint/ban-tslint-comment']: 'error',
			['@typescript-eslint/ban-types']: IS_DEV ? 'warn' : 'error',
			['@typescript-eslint/brace-style']: ['error', '1tbs', { allowSingleLine: true }],
			['@typescript-eslint/class-literal-property-style']: 'error',
			['@typescript-eslint/comma-dangle']: ['error', 'always-multiline'],
			['@typescript-eslint/comma-spacing']: 'error',
			['@typescript-eslint/consistent-indexed-object-style']: 'error',
			['@typescript-eslint/consistent-type-assertions']: [
				'error',
				{ assertionStyle: 'as' },
			],
			['@typescript-eslint/consistent-type-definitions']: ['error', 'interface'],
			['@typescript-eslint/explicit-function-return-type']: 'off',
			['@typescript-eslint/explicit-member-accessibility']: 'off',
			['@typescript-eslint/explicit-module-boundary-types']: 'off',
			['@typescript-eslint/func-call-spacing']: ['error', 'never'],
			['@typescript-eslint/keyword-spacing']: 'error',
			['@typescript-eslint/lines-between-class-members']: 'error',
			['@typescript-eslint/naming-convention']: [
				'error',
				{
					selector: 'default',
					format: ['camelCase'],
					filter: {
						regex: `^(${ALWAYS_ALLOWED_NAMING_PREFIXES.join('|')})`,
						match: false
					},
					leadingUnderscore: 'allow',
				},
				{
					selector: 'variable',
					format: ['camelCase', 'UPPER_CASE'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
				{
					selector: 'parameter',
					format: ['camelCase'],
					leadingUnderscore: 'allow',
				},
				{
					selector: 'memberLike',
					format: ['camelCase'],
					filter: {
						regex: `^(${ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES.join('|')})_`,
						match: false
					},
				},
				/**
				 * @TODO: Decide whether or not to keep this. This enforces underscore
				 * prefixes for private class properties, but may conflict with newer
				 * syntax for private members in ES2022.
				 */
				// {
				// 	selector: 'memberLike',
				// 	modifiers: ['private'],
				// 	format: ['camelCase'],
				// 	leadingUnderscore: 'require',
				// },
				{
					selector: [
						'classProperty',
						'objectLiteralProperty',
						'typeProperty',
						'classMethod',
						'objectLiteralMethod',
						'typeMethod',
						'accessor',
						'enumMember',
					],
					format: null,
					modifiers: ['requiresQuotes'],
				},
				{
					selector: 'typeLike',
					format: ['PascalCase'],
					filter: {
						regex: `^(${ALLOWED_TYPE_NAMING_PREFIXES.join('|')})_`,
						match: false,
					},
				},
				{
					selector: 'interface',
					format: ['PascalCase'],
					custom: {
						regex: '^I[A-Z]',
						match: false,
					},
				},
			],
			['@typescript-eslint/no-base-to-string']: 'error',
			['@typescript-eslint/no-dupe-class-members']: 'error',
			['@typescript-eslint/no-duplicate-enum-values']: 'error',
			['@typescript-eslint/no-empty-interface']: IS_DEV ? 'warn' : 'error',
			['@typescript-eslint/no-explicit-any']: IS_DEV ? 'warn' : 'error',
			['@typescript-eslint/no-non-null-assertion']: 'error',
			['@typescript-eslint/no-non-null-asserted-nullish-coalescing']: 'error',
			['@typescript-eslint/no-redeclare']: 'error',
			['@typescript-eslint/no-redundant-type-constituents']: 'error',
			['@typescript-eslint/no-restricted-imports']: 'warn',
			['@typescript-eslint/no-shadow']: 'error',
			['@typescript-eslint/no-unused-vars']: [
				IS_DEV ? 'warn' : 'error',
				{
					argsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^ignore',
					varsIgnorePattern: '^_',
				},
			],
			['@typescript-eslint/no-use-before-define']: 'off',
			['@typescript-eslint/no-useless-constructor']: 'off',
			['@typescript-eslint/no-var-requires']: 'error',
			['@typescript-eslint/prefer-as-const']: 'error',
			['@typescript-eslint/prefer-includes']: 'error',
			['@typescript-eslint/prefer-nullish-coalescing']: 'off',
			['@typescript-eslint/prefer-optional-chain']: 'error',
			['@typescript-eslint/prefer-readonly']: 'error',
			['@typescript-eslint/prefer-reduce-type-parameter']: 'error',
			['@typescript-eslint/prefer-return-this-type']: 'error',
			['@typescript-eslint/prefer-string-starts-ends-with']: 'error',
			['@typescript-eslint/promise-function-async']: 'error',
			['@typescript-eslint/padding-line-between-statements']: [
				'error',
				{
					blankLine: 'always',
					prev: ['directive'],
					next: ['*'],
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
					prev: ['*'],
					next: ['return', 'break', 'continue'],
				},
				{
					blankLine: 'always',
					prev: ['const', 'let', 'var'],
					next: ['*'],
				},
				{
					blankLine: 'any',
					prev: ['const', 'let', 'var'],
					next: ['const', 'let', 'var'],
				},
				{
					blankLine: 'always',
					prev: ['multiline-const', 'multiline-let', 'multiline-var'],
					next: ['*'],
				},
				{
					blankLine: 'never',
					prev: ['singleline-const', 'singleline-let', 'singleline-var'],
					next: ['singleline-const', 'singleline-let', 'singleline-var'],
				},
				{
					blankLine: 'always',
					prev: ['import', 'require'],
					next: ['*'],
				},
				{
					blankLine: 'any',
					prev: ['import', 'require'],
					next: ['import', 'require'],
				},
				{
					blankLine: 'always',
					prev: ['*'],
					next: ['export', 'exports'],
				},
				{
					blankLine: 'any',
					prev: ['export', 'exports'],
					next: ['export', 'exports'],
				},
				{
					blankLine: 'always',
					prev: ['*'],
					next: ['interface'],
				},
				{
					blankLine: 'always',
					prev: ['interface'],
					next: ['*'],
				},
				{
					blankLine: 'always',
					prev: ['type'],
					next: ['*'],
				},
				{
					blankLine: 'any',
					prev: ['type'],
					next: ['type'],
				},
			],
			['@typescript-eslint/return-await']: 'error',
			['@typescript-eslint/semi']: 'error',
			// ['@typescript-eslint/sort-type-union-intersection-members']: IS_DEV ? 'warn' : 'error',
			['@typescript-eslint/space-before-blocks']: 'error',
			['@typescript-eslint/space-before-function-paren']: [
				'error',
				{ asyncArrow: 'always', anonymous: 'never', named: 'never' },
			],
			['@typescript-eslint/switch-exhaustiveness-check']: IS_DEV ? 'warn' : 'error',
			['@typescript-eslint/type-annotation-spacing']: 'error',
			['@typescript-eslint/unified-signatures']: 'error',
			/**
			 * Disable ESLint-core counterparts.
			 */
			['brace-style']: 'off',
			['camelcase']: 'off',
			['comma-dangle']: 'off',
			['comma-spacing']: 'off',
			['func-call-spacing']: 'off',
			['keyword-spacing']: 'off',
			['lines-between-class-members']: 'off',
			['no-dupe-class-members']: 'off',
			['no-redeclare']: 'off',
			['no-restricted-imports']: 'off',
			['no-shadow']: 'off',
			['no-unused-vars']: 'off',
			['no-useless-constructor']: 'off',
			['padding-line-between-statements']: 'off',
			['no-return-await']: 'off',
			['semi']: 'off',
			['space-before-blocks']: 'off',
			['space-before-function-paren']: 'off',
		},
		settings: {
			'import/extensions': [
				'.ts',
				'.tsx',
			],
			'import/resolver': {
				node: {
					extensions: [
						'.js',
						'.json',
						'.jsx',
						'.ts',
						'.tsx',
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
			'**/*.d.ts',
			'**/*.config.ts',
			'**/shared/**/!(*.spec).ts',
			'**/*.(remote|lazy).ts',
			'**/Lazy*.ts',
			'**/*Remote.ts',
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
		languageOptions: {
			parser: tsEslint.parser,
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			['@typescript-eslint']: tsEslint.plugin,
		},
		files: [
			'**/*.spec.ts?(x)',
			'**/__test__/**/*.ts?(x)',
		],
		ignores: [
			'**/{cypress,e2e}/**/*.cy.[jt]s'
		],
		rules: {
			['@typescript-eslint/dot-notation']: 'off',
			['@typescript-eslint/naming-convention']: 'off',
			['@typescript-eslint/no-empty-function']: 'off',
			['@typescript-eslint/no-empty-interface']: 'off',
			['@typescript-eslint/no-useless-constructor']: 'off',
		},
	}
] as Linter.FlatConfigArray;
