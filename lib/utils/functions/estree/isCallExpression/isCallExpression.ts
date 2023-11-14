import type { CallExpression } from 'estree';
import { isNewExpression } from '@functions/estree/isNewExpression';
import { isSimpleCallExpression } from '@functions/estree/isSimpleCallExpression';

/**
 * Checks that an `unknown` value is a {@link CallExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `SimpleCallExpression` or `NewExpression`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link CallExpression}.
 */
export const isCallExpression = (value: unknown): value is CallExpression =>
	/**
	 * value
	 */
	isSimpleCallExpression(value) ||
	isNewExpression(value);
