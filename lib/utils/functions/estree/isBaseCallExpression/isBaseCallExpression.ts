import type { BaseCallExpression } from 'estree';
import { isArray } from '@rob.hameetman/type-guards';
import { isBaseExpression } from '@/utils/functions/estree/isBaseExpression';
import { isExpression } from '@/utils/functions/estree/isExpression';
import { isSpreadElement } from '@/utils/functions/estree/isSpreadElement';
import { isSuper } from '@/utils/functions/estree/isSuper';

/**
 * Checks that an `unknown` value is a {@link BaseCallExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseExpression`.
 *   - `value.arguments` is required and must be an array of `Expression`s or `SpreadElement`s.
 *   - `value.callee` is required and must be a valid `Expression` or `Super`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BaseCallExpression}.
 */
export const isBaseCallExpression = (value: unknown): value is BaseCallExpression =>
	/**
	 * value
	 */
	isBaseExpression(value) &&
	/**
	 * value.arguments
	 */
	'arguments' in value &&
	isArray(value.arguments) &&
	value.arguments.every((argument) =>
		isExpression(argument) ||
		isSpreadElement(argument)) &&
	/**
	 * value.callee
	 */
	'callee' in value &&
	(isExpression(value.callee) || isSuper(value.callee));
