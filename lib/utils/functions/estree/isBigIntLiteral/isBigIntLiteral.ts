import type { BigIntLiteral } from 'estree';
import { isString } from '@rob.hameetman/type-guards';
import { isBaseExpression } from '@/utils/functions/estree/isBaseExpression';
import { isBaseNode } from '@/utils/functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link BigIntLiteral}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode` and `BaseExpression`.
 *   - `value.bigint` is required and must be a string.
 *   - `value.type` is required and must be the string `'Literal'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BigIntLiteral}.
 */
export const isBigIntLiteral = (value: unknown): value is BigIntLiteral =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	isBaseExpression(value) &&
	/**
	 * value.bigint
	 */
	'bigint' in value &&
	isString(value.bigint) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'Literal';
