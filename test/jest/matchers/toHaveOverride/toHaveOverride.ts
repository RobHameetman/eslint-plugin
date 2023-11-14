import { ESLint } from 'eslint';

const NAME = 'toHaveOverride';

const isLintResult = (value: unknown): value is ESLint.LintResultWithConfig =>
	typeof value === 'object' &&
	value !== null &&
	!(value instanceof Array) &&
	'messages' in value &&
	value.messages instanceof Array;

/**
 * Jest uses `Object.is()` for equality checking, which distinguishes 0 from -0,
 * which can cause false negatives (literally!) when we try to use `.toBe(0)` or
 * `.toEqual(0)`.
 *
 * @see https://github.com/jasmine/jasmine/issues/496
 */
expect.extend({
	[NAME](received: unknown, name: string) {
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

		const isEslintResult = isLintResult(received);

		if (!(isEslintResult)) {
			throw new Error(
				matcherErrorMessage(
					matcherHint(NAME, undefined, '', options),
					/* eslint-disable-next-line new-cap */
					`${RECEIVED_COLOR('received')} value must be a valid ESLint LintResult`,
					printWithType('Received', received, printReceived),
				),
			);
		}

		const { config = {} } = received;
		const { overrides = [] } = config;

		// console.log(overrides);

		const pass = ({
			['allow-default-exports']: ()	=> overrides.some(({ rules = {} }) => {
				const keys = Object.keys(rules);

				return keys.length === 1 && keys.at(0) === 'import/no-default-export';
			}),
			['cypress']: () => overrides.some(({ plugins }) =>
				plugins?.includes('cypress'),
			),
			['graphql']: () => overrides.some(({ plugins }) =>
				plugins?.includes('graphql'),
			),
			['jest']: () => overrides.some(({ plugins }) =>
				plugins?.includes('jest'),
			),
			['testing-library']: () => overrides.some(({ plugins }) =>
				plugins?.includes('jest') &&
				plugins?.includes('testing-library'),
			),
			['typescript']: () => overrides.some(({ parser, plugins }) =>
				parser === '@typescript-eslint/parser' &&
				plugins?.includes('@typescript-eslint') &&
				plugins?.length === 1,
			),
			['react']: () => overrides.some(({ parserOptions, plugins }) =>
				parserOptions?.ecmaFeatures?.jsx === true &&
				plugins?.includes('react') &&
				plugins?.includes('react-hooks') &&
				plugins?.includes('jsx-a11y') &&
				plugins?.length === 3,
			),
		}[name.toLowerCase()] || (() => false))();

		const message = (): string =>
			`${matcherHint(NAME, 'received', '', options)}\n\n` +
			`Expected config override "${printExpected(name)}" ${
				pass ? '' : ' not'
			} to be included\n`;

		return { pass, message };
	},
});
