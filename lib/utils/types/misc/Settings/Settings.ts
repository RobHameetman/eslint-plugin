import { isObject } from '@rob.hameetman/type-guards';

/**
 * ESLint plugins work by returning a `Settings` object from their entry
 * point. This object contains a `create()` method which returns a
 * `RuleListener` object. It may also contain a `meta` object which provides
 * metadata for the rule.
 *
 * We're extending ESLint's `Settings` interface to add a `create()` method
 * which returns a `RuleListener` object with a generic type parameter. This
 * allows us to specify the type of the options object which is passed to the
 * `create()` method.
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in
 * the schema.
 */
export interface Settings extends Record<string, unknown> {
	/**
	 * @TODO: Add settings here
	 */
}

/**
 * Checks that an `unknown` value are {@link Settings<T>}.
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
 * @returns The determination that `value` are or are not {@link Settings}.
 */
export const areSettings = (value: unknown): value is Settings =>
	/**
	 * value
	 */
	isObject(value);
