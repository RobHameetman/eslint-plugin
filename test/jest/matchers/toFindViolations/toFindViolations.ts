import { ESLint } from 'eslint';

const NAME = 'toFindViolations';

const isLintResult = (value: unknown): value is ESLint.LintResultWithConfig =>
	typeof value === 'object' &&
	value !== null &&
	!(value instanceof Array) &&
	Object.keys(value) &&
	Object.values(value).every((v) => v instanceof Array);

/**
 * Jest uses `Object.is()` for equality checking, which distinguishes 0 from -0,
 * which can cause false negatives (literally!) when we try to use `.toBe(0)` or
 * `.toEqual(0)`.
 *
 * @see https://github.com/jasmine/jasmine/issues/496
 */
expect.extend({
	[NAME](received: unknown, minimum = 1) {
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

		const pass = Object.keys(received).length >= minimum;

		const message = (): string =>
			`${matcherHint(NAME, 'received', '', options)}\n\n` +
			`Expected ${printReceived(received.messages.length)} ESLint violations ${
				pass ? '' : ' not'
			} to be greater than or equal to ${printExpected(minimum)}\n`;

		return { pass, message };
	},
});
