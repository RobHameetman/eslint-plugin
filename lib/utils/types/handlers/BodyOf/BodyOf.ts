import { isObject } from '@rob.hameetman/type-guards';
import { NodePassedTo } from '@/utils/types/handlers/NodePassedTo';

/**
 * This type determines the type of the `body` property on the given type `T`.
 * It is used in custom ESLint rules where the `task` may receive one of a union
 * of possible `NodeListener` argument types
 */
export type BodyOf<T = NodePassedTo> =
	T extends { body: infer U }
		? U
		: never;

/**
 * Checks that an `unknown` value is a {@link BodyOf<T>}.
 *
 * Requirements:
 *   - `of` must be an object
 *   - `of.body` is required and must be `value`
 *
 * @typeParam T - An interface type with an unknown `body` property.
 *
 * @param value - An `unknown` value.
 * @param of - A value of type T.
 *
 * @returns The determination that `value` is or is not a {@link BodyOf<T>}.
 */
export const isBodyOf = <T = NodePassedTo>(
	value: unknown,
	of: T,
): value is BodyOf<T> =>
	/**
	 * of
	 */
	isObject(of) &&
	/**
	 * of.body
	 */
	'body' in of &&
	of.body === value;
