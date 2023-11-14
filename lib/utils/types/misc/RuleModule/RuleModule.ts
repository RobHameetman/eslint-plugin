import { Rule } from 'eslint';
import { isObject } from '@rob.hameetman/type-guards';
import { RuleFactory, isRuleFactory } from '../RuleFactory';

/**
 * ESLint plugins work by returning a `RuleModule` object from their entry
 * point. This object contains a `create()` method which returns a
 * `RuleListener` object. It may also contain a `meta` object which provides
 * metadata for the rule.
 *
 * We're extending ESLint's `RuleModule` interface to add a `create()` method
 * which returns a `RuleListener` object with a generic type parameter. This
 * allows us to specify the type of the options object which is passed to the
 * `create()` method.
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in
 * the schema.
 */
export interface RuleModule<T = never> extends Rule.RuleModule {
	create: RuleFactory<T>;
}

/**
 * Checks that an `unknown` value is a {@link RuleModule<T>}.
 *
 * Requirements:
 *   - `value` must be a an object
 *   - `value.create()` is required and must be a valid `RuleFactory<T>`
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in
 * the schema.
 *
 * @param value - An `unknown` value.
 * @param context - [Optional] An options object of type `T`. If provided,
 * `value.create()` must return a `RuleListener` object when invoked with it.
 *
 * @returns The determination that `value` is or is not a {@link RuleModule<T>}.
 */
export const isRuleModule = <T = never>(
	value: unknown,
	context?: T,
): value is RuleModule<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.create()
	 */
	'create' in value &&
	isRuleFactory(value.create, context);
