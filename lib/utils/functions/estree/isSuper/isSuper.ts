import type { Super } from 'estree';
import { isBaseNode } from '@/utils/functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link Super}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *   - `value.type` is required and must be the string `'Super'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Super}.
 */
export const isSuper = (value: unknown): value is Super =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'Super';
