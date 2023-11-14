import type { AssignmentExpression } from 'estree';
import { isBaseExpression } from '@functions/estree/isBaseExpression';

/**
 * Checks that an `unknown` value is a {@link AssignmentExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseExpression`.
 *   - `value.type` is required and must be `'AssignmentExpression'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link AssignmentExpression}.
 */
export const isAssignmentExpression = (value: unknown): value is AssignmentExpression =>
	/**
	 * value
	 */
	isBaseExpression(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'AssignmentExpression';
