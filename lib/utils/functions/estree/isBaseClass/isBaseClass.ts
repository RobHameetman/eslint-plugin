import type { BaseClass } from 'estree';
import { isUndefinedOrNull } from '@rob.hameetman/type-guards';
import { isBaseNode } from '@/utils/functions/estree/isBaseNode';
import { isClassBody } from '@/utils/functions/estree/isClassBody';
import { isExpression } from '@/utils/functions/estree/isExpression';

/**
 * Checks that an `unknown` value is a {@link BaseClass}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *   - `value.body` is required and must be a valid `ClassBody`.
 *   - `value.superClass` is optional and must be a valid `Expression` or `null` or `undefined` if provided.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BaseClass}.
 */
export const isBaseClass = (value: unknown): value is BaseClass =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	/**
	 * value.body
	 */
	'body' in value &&
	isClassBody(value.body) &&
	/**
	 * value.superClass
	 */
	('superClass' in value
		? (isExpression(value.superClass) || isUndefinedOrNull(value.superClass))
		: true);
