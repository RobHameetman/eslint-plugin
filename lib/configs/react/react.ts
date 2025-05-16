import { Linter } from 'eslint';
import globals from 'globals';
import * as importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tsEslint from 'typescript-eslint';
import { IS_BROWSER } from '@/utils/constants/check/IS_BROWSER';
import { IS_DEV } from '@/utils/constants/check/IS_DEV';
import { IS_MODULE } from '@/utils/constants/check/IS_MODULE';
import { USING_NEXT } from '@/utils/constants/deps/USING_NEXT';
// import { USING_PRETTIER } from '@/utils/constants/deps/USING_PRETTIER';
import { USING_SERVICE_WORKER } from '@/utils/constants/deps/USING_SERVICE_WORKER';
import { USING_TYPESCRIPT } from '@/utils/constants/deps/USING_TYPESCRIPT';
import { ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES } from '@/utils/constants/misc/ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES';
import { ALLOWED_TYPE_NAMING_PREFIXES } from '@/utils/constants/misc/ALLOWED_TYPE_NAMING_PREFIXES';
// import { USING_RECOMMENDED } from '@/utils/constants/misc/USING_RECOMMENDED';
import { flatten } from '@/utils/functions/misc/flatten';
// import { isImported } from '@/utils/functions/misc/isImported';

// const { extendsCoreConfigs = [], default: core = {} } = USING_RECOMMENDED ? {} : (await import('@/configs/core'));
// const { default: prettier = {} } = USING_PRETTIER && !USING_RECOMMENDED ? (await import('@/configs/prettier')) : {};

const extendsConfigs = [
	// ...extendsCoreConfigs,
	...flatten(reactPlugin.configs?.recommended),
	...flatten(reactHooksPlugin.configs?.recommended),
	...flatten(jsxA11yPlugin.configs?.recommended),
	...(USING_NEXT ? [nextPlugin.configs?.recommended, nextPlugin.configs?.['core-web-vitals']] : []),
	// ...(isImported(core) ? [core] : []),
	// ...(isImported(prettier) ? [prettier] : []),
];

const hasImportPlugin = extendsConfigs.some(({ plugins }: any) => 'import' in plugins);

export default [
	...extendsConfigs,
	{
		name: `${process.env.npm_package_name}/react`,
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: IS_MODULE ? 'module' : 'script',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
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
			// ['import']: importPlugin,
			...(process.env.NODE_ENV === 'test' ? {} : { ['import']: importPlugin, }),
			['react']: reactPlugin,
			['react-hooks']: reactHooksPlugin,
			['jsx-a11y']: jsxA11yPlugin,
			...(USING_NEXT ? {
				['@next/next']: nextPlugin,
			} : {}),
		},
		files: [
			'**/*.[jt]sx',
		],
		/**
		 * Note: use only semantic values for rules (i.e. 'off', 'warn', 'error')
		 * rather than numeric values.
		 */
		rules: {
			/**
			 * plugin:react
			 */
			/**
			 * These rules are having compatibility issues with ESLint 9.0.0:
			 * "TypeError: context.getScope is not a function"
			 * @see https://eslint.org/docs/latest/use/troubleshooting/v9-rule-api-changes
			 */
			['react/boolean-prop-naming']: 'off',
			['react/destructuring-assignment']: 'off',
			['react/hook-use-state']: 'off',
			['react/jsx-fragments']: 'off',
			['react/jsx-no-undef']: 'off',
			['react/jsx-uses-react']: 'off',
			['react/jsx-uses-vars']: 'off',
			['react/no-array-index-key']: 'off',
			['react/no-direct-mutation-state']: 'off',
			['react/no-multi-comp']: 'off',
			['react/no-string-refs']: 'off',
			['react/no-this-in-sfc']: 'off',
			['react/no-unstable-nested-components']: 'off',
			['react/prefer-read-only-props']: 'off',
			['react/prefer-stateless-function']: 'off',
			['react/require-render-return']: 'off',
			// ['react/boolean-prop-naming']: [
			// 	'error', {
			// 		message: 'Linking verbs like "is" and "has" are redundant in boolean prop names. A single intransitive verb (e.g. `open` instead of `isOpen`, `complete` instead of `hasFinished`, `silent` instead of `hideErrors`, etc.) is ideal, though a transitive verb followed by a subject is often necessary for more complex/specialized use cases (e.g. `displayCancelButton`).',
			// 		rule: '^(?!is|has|should|use)([A-Za-z0-9]?)*',
			// 	},
			// ],
			// ['react/destructuring-assignment']: [
			// 	'error',
			// 	'always',
			// 	{ destructureInSignature: 'always' },
			// ],
			['react/display-name']: 'off',
			['react/forbid-dom-props']: [
				'error',
				{
					forbid: [
						{ propName: 'data-testID', message: 'Test ID attributes should be "data-test-id".' },
						{ propName: 'data-testId', message: 'Test ID attributes should be "data-test-id".' },
						{ propName: 'data-test-Id', message: 'Test ID attributes should be "data-test-id".' },
						{ propName: 'data-test-ID', message: 'Test ID attributes should be "data-test-id".' },
					],
				},
			],
			// ['react/hook-use-state']: [IS_DEV ? 'warn' : 'error', {
			// 	allowDestructuredState: true,
			// }],
			['react/jsx-boolean-value']: 'error',
			['react/jsx-closing-bracket-location']: ['error', 'line-aligned'],
			['react/jsx-curly-brace-presence']: ['error', 'never'],
			['react/jsx-curly-newline']: ['error', 'consistent'],
			['react/jsx-curly-spacing']: ['error', { when: 'never' }],
			['react/jsx-equals-spacing']: 'error',
			['react/jsx-filename-extension']: [
				'error',
				{ extensions: ['.tsx', '.jsx'] },
			],
			// ['react/jsx-fragments']: ['error', 'syntax'],
			['react/jsx-handler-names']: ['error', {
				eventHandlerPrefix: 'handle',
				eventHandlerPropPrefix: 'on',
				checkLocalVariables: true,
			}],
			['react/jsx-max-props-per-line']: ['error', {
				maximum: { single: 5, multi: 1 },
			}],
			['react/jsx-newline']: ['error', { prevent: true }],
			['react/jsx-no-comment-textnodes']: 'error',
			['react/jsx-no-leaked-render']: 'error',
			// ['react/jsx-no-undef']: IS_DEV ? 'warn' : 'error',
			['react/jsx-no-useless-fragment']: IS_DEV ? 'warn' : 'error',
			['react/jsx-pascal-case']: 'error',
			['react/jsx-sort-props']: ['error', {
				noSortAlphabetically: true,
				reservedFirst: ['key'],
				shorthandLast: true,
			}],
			['react/jsx-tag-spacing']: 'error',
			// ['react/jsx-uses-vars']: 'error',
			['react/jsx-wrap-multilines']: 'error',
			// ['react/no-array-index-key']: IS_DEV ? 'warn' : 'error',
			['react/no-deprecated']: 'error',
			['react/no-invalid-html-attribute']: IS_DEV ? 'warn' : 'error',
			// ['react/no-multi-comp']: 'error',
			['react/no-namespace']: 'error',
			// ['react/no-this-in-sfc']: 'error',
			// ['react/no-unstable-nested-components']: 'error',
			['react/prefer-es6-class']: ['error', 'always'],
			// ['react/prefer-read-only-props']: 'error',
			// ['react/prefer-stateless-function']: 'error',
			['react/prop-types']: 'off',
			['react/react-in-jsx-scope']: 'off',
			['react/require-default-props']: 'off',
			['react/self-closing-comp']: 'error',
			['react/style-prop-object']: 'error',
			['react/void-dom-elements-no-children']: 'error',
			/**
			 * Other overrides
			 */
			['import/no-default-export']: 'off',
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
							pattern: 'react',
							group: 'builtin',
							position: 'before'
						},
						{
							pattern: 'react-dom',
							group: 'builtin',
							position: 'before'
						},
						{
							pattern: 'react-router',
							group: 'builtin',
							position: 'before'
						},
						{
							pattern: 'react-router-dom',
							group: 'builtin',
							position: 'before',
						},
						{
							pattern: './*?(.module).?(s)css',
							group: 'unknown',
							position: 'after',
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
		},
		settings: {
			'import/extensions': [
				'.jsx',
				'.tsx',
				'.json',
				'.css',
				'.scss',
			],
			'import/resolver': {
				node: {
					extensions: [
						'.jsx',
						'.tsx',
						'.json',
						'.css',
						'.scss',
					],
				},
			},
			react: {
				version: 'detect',
			},
		},
	},
	...(USING_TYPESCRIPT ? [{
		languageOptions: {
			parser: tsEslint.parser,
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			['@typescript-eslint']: tsEslint,
		},
		files: [
			'**/*.tsx',
		],
		rules: {
			['@typescript-eslint/naming-convention']: [
				'error',
				{
					selector: 'default',
					format: ['camelCase'],
					leadingUnderscore: 'allow',
				},
				{
					selector: 'variable',
					format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
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
					format: ['camelCase', 'PascalCase'],
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
		}
	}] : []),
	/**
	 * Allow default exports in `index.js`, in TypeScript type declaration
	 * files, in MFE remotes and other lazy-loaded resources, and in config
	 * files like `webpack.config.js`, `rollup.config.js`, etc.
	 */
	{
		files: [
			'**/shared/**/!(*.spec).[jt]sx',
			'**/*.(remote|lazy).[jt]sx',
			'**/Lazy*.[jt]sx',
			'**/*Remote.[jt]sx',
		],
		rules: {
			['import/no-default-export']: 'off',
		},
	},
	/**
	 * Override other ESLint rules in Jest tests and adjacent resources.
	 */
	{
		files: [
			'**/*.spec.[jt]sx',
			'**/__test__/**/*.[jt]sx',
		],
		ignores: [
			'**/{cypress,e2e}/**/*.cy.[jt]s'
		],
		rules: {
			['react/jsx-no-useless-fragment']: 'off',
		}
	}
] as Linter.FlatConfigArray;
