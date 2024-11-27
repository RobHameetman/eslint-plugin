import { ESLint, Linter } from 'eslint';
import removedRules from './removed-rules.json' with { type: 'json' };

const NAME = 'toAvoidRemovedRules';

const isFlatConfig = (value: unknown): value is Linter.FlatConfig =>
	typeof value === 'object' &&
	value !== null &&
	!(value instanceof Array) &&
	(('rules' in value &&
	typeof value.rules === 'object' &&
	value.rules !== null &&
	!(value.rules instanceof Array)) || (
		'languageOptions' in value &&
		typeof value.languageOptions === 'object' &&
		value.languageOptions !== null &&
		!(value.languageOptions instanceof Array)
	));

const isFlatConfigArray = (value: unknown): value is Linter.FlatConfigArray =>
	value instanceof Array &&
	value.every(isFlatConfig);

const pluginNamespace = (name: string) => ({
		['eslint']: '',
		['eslint-plugin-cypress']: 'cypress',
		['eslint-plugin-graphql']: 'graphql',
		['eslint-plugin-import']: 'import',
		['eslint-plugin-jest']: 'jest',
		['eslint-plugin-jest-async']: 'jest-async',
    ['eslint-plugin-jsx-a11y']: 'jsx-a11y',
    ['eslint-plugin-no-secrets']: 'no-secrets',
    ['eslint-plugin-no-unsanitized']: 'no-unsanitized',
    ['eslint-plugin-node']: 'node',
    ['eslint-plugin-prettier']: 'prettier',
    ['eslint-plugin-promise']: 'promise',
    ['eslint-plugin-react']: 'react',
    ['eslint-plugin-react-hooks']: 'react-hooks',
    ['eslint-plugin-security']: 'security',
    ['eslint-plugin-tailwindcss']: 'tailwindcss',
		['eslint-plugin-testing-library']: 'testing-library',
		['typescript-eslint']: '@typescript-eslint',
	})[name] || '';

/**
 * Jest uses `Object.is()` for equality checking, which distinguishes 0 from -0,
 * which can cause false negatives (literally!) when we try to use `.toBe(0)` or
 * `.toEqual(0)`.
 *
 * @see https://github.com/jasmine/jasmine/issues/496
 */
expect.extend({
	[NAME](received: unknown) {
		const {
			RECEIVED_COLOR,
			matcherErrorMessage,
			matcherHint,
			printExpected,
			printReceived,
			printWithType,
		} = this.utils;

		const options = {
			isNot: this.isNot,
			promise: this.promise,
		};

		if (!isFlatConfigArray(received)) {
			throw new Error(
				matcherErrorMessage(
					matcherHint(NAME, undefined, '', options),
					/* eslint-disable-next-line new-cap */
					`${RECEIVED_COLOR('received')} must be an array of valid flat configs`,
					printWithType('Received', received, printReceived),
				),
			);
		}

		const rules = Array.from(new Set(
			received.flatMap(({ rules }) => Object.keys((rules ?? {}) as object)),
		));

		const removed = Array.from(new Set(
			Object.entries(removedRules)
				.filter(([plugin]) => plugin !== 'default')
				.flatMap(([plugin, removedPluginRules]) =>
					removedPluginRules?.map((rule) =>
						pluginNamespace(plugin)
							? `${pluginNamespace(plugin)}/${rule}`
							: rule
					)
				),
		));

		const usedAndRemoved = rules.filter((rule) => removed.includes(rule));
		const pass = usedAndRemoved.length === 0;

		const message = () =>
			`${matcherHint(NAME, 'received', '', options)}\n\n` +
			`Expected config${
				pass ? ' not' : ''
			} to avoid removed rules but found ${
				printReceived(usedAndRemoved.length)
			}:\n${usedAndRemoved.map((rule) => `  - ${printReceived(rule)}`).join('\n')}\n`;

		return { pass, message };
	},
});
