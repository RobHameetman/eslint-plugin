import { isObject } from '@rob.hameetman/type-guards';
import { ListenerTypeList } from '@type/misc/ListenerTypeList';
import { ValidationTask, isValidationTask } from '@type/misc/ValidationTask';

/**
 * An internal object used by the `CustomESLintRule` class with methods that
 * ESLint calls to "visit" nodes while traversing the abstract syntax tree (AST
 * as defined by ESTree).
 */
export type RuleListeners<T = never, U extends ListenerTypeList = ListenerTypeList> = {
	[K in U[number]]?: ValidationTask<T, U>;
};

/**
 * Checks that an `unknown` value are {@link RuleListeners}.
 *
 * Requirements:
 *   - `value` must be a function which returns an object.
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in
 * the schema.
 *
 * @param value - An `unknown` value.
 * @param keys - [Optional] An array of string keys to check for.
 *
 * @returns The determination that `value` are or are not {@link RuleListeners}.
 */
export const areRuleListeners = <T = never, U extends ListenerTypeList = ListenerTypeList>(
	value: unknown,
	keys?: U,
): value is RuleListeners<T, U> =>
	/**
	 * value
	 */
	isObject(value) &&
	Object.values(value).every(isValidationTask) &&
	(keys
		? Object.keys(value).every((key) => keys.map(String).includes(key))
		: true);
