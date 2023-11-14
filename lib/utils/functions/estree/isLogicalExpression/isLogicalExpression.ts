import type { LogicalExpression } from 'estree';
import { isBaseExpression } from '@functions/estree/isBaseExpression';

/**
 * Checks that an `unknown` value is a {@link LogicalExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseExpression`.
 *   - `value.type` is required and must be `'LogicalExpression'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link LogicalExpression}.
 */
export const isLogicalExpression = (value: unknown): value is LogicalExpression =>
	/**
	 * value
	 */
	isBaseExpression(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'LogicalExpression';
