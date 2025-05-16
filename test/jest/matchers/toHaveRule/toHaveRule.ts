import { Linter } from 'eslint';

const NAME = 'toHaveRule';

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

/**
 * Jest uses `Object.is()` for equality checking, which distinguishes 0 from -0,
 * which can cause false negatives (literally!) when we try to use `.toBe(0)` or
 * `.toEqual(0)`.
 *
 * @see https://github.com/jasmine/jasmine/issues/496
 */
expect.extend({
	[NAME](received: unknown, rule: string, value?: unknown) {
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

		const rules =
			received.flatMap(
				({ rules }, index, arr) =>
					index >= arr.findLastIndex(({ name }) => name?.startsWith(process.env.npm_package_name || ''))
						? Object.entries((rules ?? {}) as object)
						: []
			).reduce((rules, [rule, value]) => ({
				...rules,
				[rule]: value,
			}), {} as Record<string, unknown>);

		const pass = Object.keys(rules).includes(rule) && (value ? rules[rule] === value : true);

		const message = (): string =>
			`${matcherHint(NAME, 'received', '', options)}\n\n` +
			`Expected rule "${printExpected(rule)}" ${
				pass ? '' : ' not'
			} to be included\n`;

		return { pass, message };
	},
});
