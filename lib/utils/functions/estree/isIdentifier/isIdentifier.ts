import type { Identifier } from 'estree';
import { isBaseNode } from '@functions/estree/isBaseNode';
import { isBaseExpression } from '@functions/estree/isBaseExpression';
import { isBasePattern } from '@functions/estree/isBasePattern';

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
