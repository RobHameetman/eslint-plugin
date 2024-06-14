import { Rule } from 'eslint';
import { isFunction } from '@rob.hameetman/type-guards';
import { Listener } from '@/utils/types/listeners/Listener';
import { Selector } from '@/utils/types/listeners/Selector';

/**
 * A `Handler` is a validation function to be included in an ESLint
 * `NodeListener` object, which receives a specific `Node` as an argument
 * depending on the selector to which it is attached.
 *
 * @typeParam T - [Optional] One or more selectors as a union of string keys.
 */
export type Handler<T extends Selector = Selector> =
	Listener<T> extends { [key: string]: infer U }
		? U
		: never;

/**
 * Checks that an `unknown` value is a {@link Handler<T>}.
 *
 * Requirements:
 *   - `value` must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Handler<T>}.
 */
export const isHandler = <T extends Selector = Selector>(
	value: unknown,
): value is Handler<T> =>
	/**
	 * value
	 */
	isFunction(value);
