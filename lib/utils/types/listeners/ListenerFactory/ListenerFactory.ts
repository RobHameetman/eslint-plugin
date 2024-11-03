import { Rule } from 'eslint';
import { isFunction, isObject } from '@rob.hameetman/type-guards';

/**
 * A listener factory is a function which receives the rule context as an
 * argument and returns a {@link Rule.RuleListener} object (i.e. the return type
 * of a custom ESLint rule's 'create' method).
 *
 * @typeParam T - [Optional] A schema for a custom rule. This is inferred from
 * the schema passed to the `CustomESLintRule` constructor.
 */
export type ListenerFactory<
	T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>,
> =
	(context: Rule.Context<T>) => Rule.RuleListener;

/**
 * Checks that an `unknown` value is a {@link ListenerFactory}.
 *
 * Requirements:
 *   - `value` must be a function which returns an object.
 *
 * @typeParam T - [Optional] A schema for a custom rule. This is inferred from
 * the schema passed to the `CustomESLintRule` constructor.
 *
 * @param value - An `unknown` value.
 * @param context - [Optional] An options object of type `T`. If provided,
 * `value` must return a `RuleListener` object when invoked with it.
 *
 * @returns The determination that `value` is or is not a {@link ListenerFactory}.
 */
export const isListenerFactory = <T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>>(
	value: unknown,
	context?: Rule.Context<T>,
): value is ListenerFactory<T> =>
	/**
	 * value
	 */
	isFunction(value) &&
	(context
		? isObject(value(context))
		: true);
