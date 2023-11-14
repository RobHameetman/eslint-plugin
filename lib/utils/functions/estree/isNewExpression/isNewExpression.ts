import type { NewExpression } from 'estree';
import { isBaseCallExpression } from '@functions/estree/isBaseCallExpression';

/**
 * Checks that an `unknown` value is a {@link NewExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseCallExpression`.
 *   - `value.type` is required and must be `'NewExpression'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link NewExpression}.
 */
export const isNewExpression = (value: unknown): value is NewExpression =>
	/**
	 * value
	 */
	isBaseCallExpression(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'NewExpression';
