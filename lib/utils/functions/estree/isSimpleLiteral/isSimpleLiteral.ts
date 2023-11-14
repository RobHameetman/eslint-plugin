import type { SimpleLiteral } from 'estree';
import { isBoolean, isNumber, isString, isNull } from '@rob.hameetman/type-guards';
import { isBaseExpression } from '@functions/estree/isBaseExpression';
import { isBaseNode } from '@functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link SimpleLiteral}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode` and `BaseExpression`.
 *   - `value.type` is required and must be the string `'Literal'`.
 *   - `value.value` is required and must be a string or boolean or number or `null` if provided.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link SimpleLiteral}.
 */
export const isSimpleLiteral = (value: unknown): value is SimpleLiteral =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	isBaseExpression(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'Literal' &&
	/**
	 * value.value
	 */
	'value' in value &&
	(isBoolean(value.value) ||
		isNumber(value.value) ||
		isString(value.value) ||
		isNull(value.value));
