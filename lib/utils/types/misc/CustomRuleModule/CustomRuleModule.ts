import { Rule } from 'eslint';
import { isObject } from '@rob.hameetman/type-guards';
import { ListenerFactory, isListenerFactory } from '@/utils/types/listeners/ListenerFactory';

/**
 * @deprecated - Moved this type into eslint.d.ts but keeping it here for
 * reference for now. We don't need the types anymore but may still want the
 * type guard or the fakeCustomRuleModule() function in the __test__/ directory.
 *
 * ESLint rules work by returning a `RuleModule` object from their entrypoint.
 * This object contains a `create()` method which returns a `RuleListener`
 * object. It may also contain a `meta` object which provides metadata for the
 * rule.
 *
 * We're extending ESLint's `RuleModule` interface to add a `create()` method
 * which returns a `RuleListener` object with a generic type parameter. This
 * allows us to specify the type of the options object which is passed to the
 * `create()` method.
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in
 * the schema.
 */
export interface CustomRuleModule<
	T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>
> extends Omit<Rule.RuleModule, 'create'> {
	create: ListenerFactory<T>;
}

/**
 * Checks that an `unknown` value is a {@link CustomRuleModule<T>}.
 *
 * Requirements:
 *   - `value` must be a an object
 *   - `value.create()` is required and must be a valid `ListenerFactory<T>`
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in
 * the schema.
 *
 * @param value - An `unknown` value.
 * @param context - [Optional] An options object of type `T`. If provided,
 * `value.create()` must return a `RuleListener` object when invoked with it.
 *
 * @returns The determination that `value` is or is not a {@link CustomRuleModule<T>}.
 */
export const isCustomRuleModule = <T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>>(
	value: unknown,
	context?: Rule.Context<T>,
): value is Rule.Module<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.create()
	 */
	'create' in value &&
	isListenerFactory(value.create, context);
