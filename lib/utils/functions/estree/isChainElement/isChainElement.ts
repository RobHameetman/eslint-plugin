import type { ChainElement } from 'estree';
import { isSimpleCallExpression } from '@/utils/functions/estree/isSimpleCallExpression';
import { isMemberExpression } from '@/utils/functions/estree/isMemberExpression';

/**
 * Checks that an `unknown` value is a {@link ChainElement}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following types:
 *     - `SimpleCallExpression`
 *     - `MemberExpression`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ChainElement}.
 */
export const isChainElement = (value: unknown): value is ChainElement =>
	/**
	 * value
	 */
	isSimpleCallExpression(value) ||
	isMemberExpression(value);
