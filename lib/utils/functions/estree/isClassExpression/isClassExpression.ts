import type { ClassExpression } from 'estree';
import { isBaseClass } from '@functions/estree/isBaseClass';
import { isBaseExpression } from '@functions/estree/isBaseExpression';

/**
 * Checks that an `unknown` value is a {@link ClassExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseClass` and `BaseExpression`.
 *   - `value.type` is required and must be `'ClassExpression'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ClassExpression}.
 */
export const isClassExpression = (value: unknown): value is ClassExpression =>
	/**
	 * value
	 */
	isBaseClass(value) &&
	isBaseExpression(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ClassExpression';
