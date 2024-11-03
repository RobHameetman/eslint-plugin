import type { ObjectExpression } from 'estree';
import { isBaseExpression } from '@/utils/functions/estree/isBaseExpression';

/**
 * Checks that an `unknown` value is a {@link ObjectExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseExpression`.
 *   - `value.type` is required and must be `'ObjectExpression'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ObjectExpression}.
 */
export const isObjectExpression = (value: unknown): value is ObjectExpression =>
	/**
	 * value
	 */
	isBaseExpression(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ObjectExpression';
