import { Rule } from 'eslint';
import { isFunction } from '@rob.hameetman/type-guards';
import { ListenersFor } from '@type/misc/ListenersFor';

/**
 * A `Listener` is a validation function to be included in an ESLint
 * `NodeListener` object, which receives a specific `Node` as an argument
 * depending on the `NodeListener` key to which it is attached.
 *
 * @typeParam T - [Optional] One or more `ListenerType`s as a union of keys.
 * If not provided, T will default to a union of all `ListenerType` keys,
 * resolving `Listener` to a union of all possible listener functions.
 */
export type Listener<T extends keyof Rule.NodeListener = keyof Rule.NodeListener> =
	ListenersFor<T> extends { [key: string]: infer U }
		? U
		: never;

/**
 * Checks that an `unknown` value is a {@link Listener}.
 *
 * Requirements:
 *   - `value` must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Listener}.
 */
export const isListener = <T extends keyof Rule.NodeListener = keyof Rule.NodeListener>(
	value: unknown,
): value is Listener<T> =>
	/**
	 * value
	 */
	isFunction(value);
