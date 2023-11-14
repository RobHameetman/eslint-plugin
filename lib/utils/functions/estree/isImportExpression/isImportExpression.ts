import type { ImportExpression } from 'estree';
import { isBaseExpression } from '@functions/estree/isBaseExpression';

/**
 * Checks that an `unknown` value is a {@link ImportExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseExpression`.
 *   - `value.type` is required and must be `'ImportExpression'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ImportExpression}.
 */
export const isImportExpression = (value: unknown): value is ImportExpression =>
	/**
	 * value
	 */
	isBaseExpression(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ImportExpression';
