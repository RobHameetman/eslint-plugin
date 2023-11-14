import type { ExpressionStatement } from 'estree';
import { isBaseStatement } from '@functions/estree/isBaseStatement';

/**
 * Checks that an `unknown` value is a {@link ExpressionStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseStatement`.
 *   - `value.type` is required and must be the string `'ExpressionStatement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ExpressionStatement}.
 */
export const isExpressionStatement = (value: unknown): value is ExpressionStatement =>
	/**
	 * value
	 */
	isBaseStatement(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ExpressionStatement';
