import { Rule } from 'eslint';
import { isArray, isObject } from '@rob.hameetman/type-guards';
import { Settings, areSettings } from '@/utils/types/misc/Settings';

/**
 * @deprecated - Moved this type into eslint.d.ts but keeping it here for
 * reference for now. We don't need the types anymore but may still want the
 * type guard or the fakeContext() function in the __test__/ directory.
 *
 * The context object contains additional functionality that is helpful for
 * rules to do their jobs. As the name implies, the context object contains
 * information that is relevant to the context of the rule.
 *
 * @see https://eslint.org/docs/developer-guide/working-with-rules#the-context-object
 *
 * @typeParam T - [Optional] A schema for a custom rule. This is inferred from
 * the schema passed in to the `CustomESLintRule` constructor.
 */
export interface Context<
	T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>,
> extends Omit<Rule.RuleContext, 'options' | 'settings'> {
	readonly options: T;
	readonly settings?: Settings;
}

/**
 * Checks that an `unknown` value is a {@link Context<T>}.
 *
 * Requirements:
 *   - `value` must be an object
 *   - `value.options` is required and must be a array of options objects
 *   - `value.settings` is optional and must be a valid {@link Settings} object if provided
 *
 * @typeParam T - [Optional] A schema for a custom rule. This is inferred from
 * the schema passed in to the `CustomESLintRule` constructor.
 *
 * @param value - An `unknown` value.
 * @param isOptions - [Optional] A type guard for one or more options objects.
 *
 * @returns The determination that `value` is or is not a {@link Context<T>}.
 */
export const isContext = <
	T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>,
>(
	value: unknown,
	isOptions = (_: unknown) => true,
): value is Context<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.options
	 */
	'options' in value &&
	isArray(value.options) &&
	value.options.every(isOptions) &&
	/**
	 * value.settings
	 */
	('settings' in value
		? areSettings(value.settings)
		: true);
