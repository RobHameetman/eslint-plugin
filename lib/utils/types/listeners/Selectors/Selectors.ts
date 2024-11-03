import { isArray } from '@rob.hameetman/type-guards';
import { Selector, isSelector } from '@/utils/types/listeners/Selector';

/**
 * An array of selectors. A selector is a string that can be used to match nodes
 * in the AST. These are the keys of the objects returned by a custom rule's
 * `create()` method. These are usually just one node identifier but may include
 * a more complex selector.
 *
 * @example
 * 'CallExpression[callee.name="setTimeout"][arguments.length!=2]'
 * 'IfStatement > :not(BlockStatement).consequent'
 *
 * @see https://eslint.org/docs/latest/extend/selectors
 */
export type Selectors<S extends Selector = Selector> = ReadonlyArray<S>;

/**
 * Checks that an `unknown` value are {@link Selectors}.
 *
 * Requirements:
 *   - `value` must be an array of `Selector`s
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` are or are not {@link Selectors}.
 */
export const areSelectors = <T extends Selector = Selector>(
	value: unknown,
): value is Selectors<T> =>
	/**
	 * value
	 */
	isArray(value) &&
	value.every(isSelector);
