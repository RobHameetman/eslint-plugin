import type { ChainExpression } from 'estree';
import { isBaseExpression } from '@functions/estree/isBaseExpression';

/**
 * Checks that an `unknown` value is a {@link ChainExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseExpression`.
 *   - `value.type` is required and must be `'ChainExpression'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ChainExpression}.
 */
export const isChainExpression = (value: unknown): value is ChainExpression =>
	/**
	 * value
	 */
	isBaseExpression(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ChainExpression';
