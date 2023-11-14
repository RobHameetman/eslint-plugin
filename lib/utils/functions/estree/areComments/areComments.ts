import type { Comment } from 'estree';
import { isArray } from '@rob.hameetman/type-guards';
import { isComment } from '@functions/estree/isComment';

/**
 * Checks that an `unknown` value is a {@link ReadonlyArray<Comment>}.
 *
 * Requirements:
 *   - `value` must be an array of valid `Comment`s.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ReadonlyArray<Comment>}.
 */
export const areComments = (value: unknown): value is ReadonlyArray<Comment> =>
	/**
	 * value
	 */
	isArray(value) &&
	value.every(isComment);
