import type { Expression } from 'estree';
import { isArray } from '@rob.hameetman/type-guards';
import { isExpression } from '@/utils/functions/estree/isExpression';

/**
 * Checks that an `unknown` value is a {@link ReadonlyArray<Expression>}.
 *
 * Requirements:
 *   - `value` must be an array of valid `Expression`s.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ReadonlyArray<Expression>}.
 */
export const areExpressions = (value: unknown): value is ReadonlyArray<Expression> =>
	/**
	 * value
	 */
	isArray(value) &&
	value.every(isExpression);
