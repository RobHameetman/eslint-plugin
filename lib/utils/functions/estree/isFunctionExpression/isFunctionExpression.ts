import type { FunctionExpression } from 'estree';
import { isBaseExpression } from '@/utils/functions/estree/isBaseExpression';
import { isBaseFunction } from '@/utils/functions/estree/isBaseFunction';

/**
 * Checks that an `unknown` value is a {@link FunctionExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseFunction` and `BaseExpression`.
 *   - `value.type` is required and must be `'FunctionExpression'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link FunctionExpression}.
 */
export const isFunctionExpression = (value: unknown): value is FunctionExpression =>
	/**
	 * value
	 */
	isBaseExpression(value) &&
	isBaseFunction(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'FunctionExpression';
