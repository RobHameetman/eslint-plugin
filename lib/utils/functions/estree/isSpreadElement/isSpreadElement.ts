import type { SpreadElement } from 'estree';
import { isBaseNode } from '@/utils/functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link SpreadElement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *   - `value.type` is required and must be the string `'SpreadElement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link SpreadElement}.
 */
export const isSpreadElement = (value: unknown): value is SpreadElement =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'SpreadElement';
