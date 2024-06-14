import type { Function } from 'estree';
import { isArrowFunctionExpression } from '@/utils/functions/estree/isArrowFunctionExpression';
import { isFunctionDeclaration } from '@/utils/functions/estree/isFunctionDeclaration';
import { isFunctionExpression } from '@/utils/functions/estree/isFunctionExpression';

/**
 * Checks that an `unknown` value is a {@link Function}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following types:
 *     - `ArrowFunctionExpression`
 *     - `FunctionDeclaration`
 *     - `FunctionExpression`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Function}.
 */
export const isFunction = (value: unknown): value is Function =>
	/**
	 * value
	 */
	isArrowFunctionExpression(value) ||
	isFunctionDeclaration(value) ||
	isFunctionExpression(value);
