import type { SequenceExpression } from 'estree';
import { isBaseExpression } from '@/utils/functions/estree/isBaseExpression';

/**
 * Checks that an `unknown` value is a {@link SequenceExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseExpression`.
 *   - `value.type` is required and must be `'SequenceExpression'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link SequenceExpression}.
 */
export const isSequenceExpression = (value: unknown): value is SequenceExpression =>
	/**
	 * value
	 */
	isBaseExpression(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'SequenceExpression';
