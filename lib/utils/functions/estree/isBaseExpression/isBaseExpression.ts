import type { BaseExpression } from 'estree';
import { isBaseNode } from '@/utils/functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link BaseExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BaseExpression}.
 */
export const isBaseExpression = (value: unknown): value is BaseExpression =>
	/**
	 * value
	 */
	isBaseNode(value);
