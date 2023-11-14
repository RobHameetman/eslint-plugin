import type { PrivateIdentifier } from 'estree';
import { isBaseNode } from '@functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link PrivateIdentifier}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *   - `value.type` is required and must be the string `'PrivateIdentifier'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link PrivateIdentifier}.
 */
export const isPrivateIdentifier = (value: unknown): value is PrivateIdentifier =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'PrivateIdentifier';
