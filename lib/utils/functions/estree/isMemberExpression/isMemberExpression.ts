import type { MemberExpression } from 'estree';
import { isBaseExpression } from '@functions/estree/isBaseExpression';
import { isBasePattern } from '@functions/estree/isBasePattern';

/**
 * Checks that an `unknown` value is a {@link MemberExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseExpression` and `BasePattern`.
 *   - `value.type` is required and must be `'MemberExpression'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link MemberExpression}.
 */
export const isMemberExpression = (value: unknown): value is MemberExpression =>
	/**
	 * value
	 */
	isBaseExpression(value) &&
	isBasePattern(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'MemberExpression';
