import type { BaseNode } from 'estree';
import { isUndefined } from '@rob.hameetman/type-guards';
import { areComments } from '@functions/estree/areComments';
import { isBaseNodeWithoutComments } from '@functions/estree/isBaseNodeWithoutComments';

/**
 * Checks that an `unknown` value is a {@link BaseNode}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNodeWithoutComments`.
 *   - `value.leadingComments` is optional and must be an array of `Comment`s or undefined.
 *   - `value.trailingComments` is optional and must be an array of `Comment`s or undefined.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BaseNode}.
 */
export const isBaseNode = (value: unknown): value is BaseNode =>
	/**
	 * value
	 */
	isBaseNodeWithoutComments(value) &&
	/**
	 * value.leadingComments
	 */
	('leadingComments' in value
		? isUndefined(value.leadingComments) || areComments(value.leadingComments)
		: true)  &&
	/**
	 * value.trailingComments
	 */
	('trailingComments' in value
		? isUndefined(value.trailingComments) || areComments(value.trailingComments)
		: true);
