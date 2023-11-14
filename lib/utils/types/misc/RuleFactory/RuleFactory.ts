import { Rule } from 'eslint';
import { isFunction, isObject } from '@rob.hameetman/type-guards';
import { RuleContext } from '@type/misc/RuleContext';

/**
 * A rule factory is a function which receives the context as an argument and
 * returns a {@link Rule.RuleListener} object.
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in
 * the schema.
 */
export type RuleFactory<T = never> =
	(context: RuleContext<T>) => Rule.RuleListener;

/**
 * Checks that an `unknown` value is a {@link RuleFactory}.
 *
 * Requirements:
 *   - `value` must be a function which returns an object.
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in
 * the schema.
 *
 * @param value - An `unknown` value.
 * @param context - [Optional] An options object of type `T`. If provided,
 * `value` must return a `RuleListener` object when invoked with it.
 *
 * @returns The determination that `value` is or is not a {@link RuleFactory}.
 */
export const isRuleFactory = <T = never>(
	value: unknown,
	context?: T,
): value is RuleFactory<T> =>
	/**
	 * value
	 */
	isFunction(value) &&
	(context
		? isObject(value(context))
		: true);
