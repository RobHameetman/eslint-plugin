import type { Pattern } from 'estree';
import { isArrayPattern } from '@functions/estree/isArrayPattern';
import { isAssignmentPattern } from '@functions/estree/isAssignmentPattern';
import { isIdentifier } from '@functions/estree/isIdentifier';
import { isMemberExpression } from '@functions/estree/isMemberExpression';
import { isObjectPattern } from '@functions/estree/isObjectPattern';
import { isRestElement } from '@functions/estree/isRestElement';

/**
 * Checks that an `unknown` value is a {@link Pattern}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following types:
 *     - `ArrayPattern`
 *     - `AssignmentPattern`
 *     - `Identifier`
 *     - `MemberExpression`
 *     - `ObjectPattern`
 *     - `RestElement`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Pattern}.
 */
export const isPattern = (value: unknown): value is Pattern =>
	/**
	 * value
	 */
	isArrayPattern(value) ||
	isAssignmentPattern(value) ||
	isIdentifier(value) ||
	isMemberExpression(value) ||
	isObjectPattern(value) ||
	isRestElement(value);
