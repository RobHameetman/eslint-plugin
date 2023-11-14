import { Rule } from 'eslint';
import { isArray } from '@rob.hameetman/type-guards';
import { isListenerType } from '@enums/ListenerTypes';

/**
 * A collection of `ListenerType`s.
 */
export type ListenerTypeList<T extends keyof Rule.NodeListener = keyof Rule.NodeListener> =
	ReadonlyArray<T>;

/**
 * Checks that an `unknown` value is a {@link ListenerTypeList}.
 *
 * Requirements:
 *   - `value` must be an array of `ListenerType`s
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ListenerTypeList}.
 */
export const isListenerTypeList = <T extends keyof Rule.NodeListener = keyof Rule.NodeListener>(
	value: unknown,
): value is ListenerTypeList<T> =>
	/**
	 * value
	 */
	isArray(value) &&
	value.every(isListenerType);
