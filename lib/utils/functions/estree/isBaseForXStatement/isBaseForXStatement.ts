import type { BaseForXStatement } from 'estree';
import { isBaseStatement } from '@functions/estree/isBaseStatement';
import { isExpression } from '@functions/estree/isExpression';
import { isPattern } from '@functions/estree/isPattern';
import { isStatement } from '@functions/estree/isStatement';
import { isVariableDeclaration } from '@functions/estree/isVariableDeclaration';

/**
 * Checks that an `unknown` value is a {@link BaseForXStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseStatement`.
 *   - `value.body` is required and must be a valid `Statement`.
 *   - `value.left` is required and must be a valid `VariableDeclaration` or `Pattern`.
 *   - `value.right` is required and must be a valid `Expression`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BaseForXStatement}.
 */
export const isBaseForXStatement = (value: unknown): value is BaseForXStatement =>
	/**
	 * value
	 */
	isBaseStatement(value) &&
	/**
	 * value.body
	 */
	'body' in value &&
	isStatement(value.body) &&
	/**
	 * value.left
	 */
	'left' in value &&
	(isVariableDeclaration(value.left) || isPattern(value.left)) &&
	/**
	 * value.right
	 */
	'right' in value &&
	isExpression(value.right);
