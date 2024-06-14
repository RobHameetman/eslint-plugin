import type { Identifier } from 'estree';
import { isBaseNode } from '@/utils/functions/estree/isBaseNode';
import { isBaseExpression } from '@/utils/functions/estree/isBaseExpression';
import { isBasePattern } from '@/utils/functions/estree/isBasePattern';

/**
 * Checks that an `unknown` value is a {@link Identifier}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`, `BaseExpression`, and `BasePattern`.
 *   - `value.type` is required and must be the string `'Identifier'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Identifier}.
 */
export const isIdentifier = (value: unknown): value is Identifier =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	isBaseExpression(value) &&
	isBasePattern(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'Identifier';
