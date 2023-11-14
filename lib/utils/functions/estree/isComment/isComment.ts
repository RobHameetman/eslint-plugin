import type { Comment } from 'estree';
import { isString } from '@rob.hameetman/type-guards';
import { isBaseNodeWithoutComments } from '@functions/estree/isBaseNodeWithoutComments';

/**
 * Checks that an `unknown` value is a {@link Comment}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNodeWithoutComments`.
 *   - `value.type` is required and must be `'Line'` or `'Block'`.
 *   - `value.value` is required and must be a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Comment}.
 */
export const isComment = (value: unknown): value is Comment =>
	/**
	 * value
	 */
	isBaseNodeWithoutComments(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	(value.type === 'Block' || value.type === 'Line');
