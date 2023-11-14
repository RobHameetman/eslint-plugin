import type { Class } from 'estree';
import { isClassDeclaration } from '@functions/estree/isClassDeclaration';
import { isClassExpression } from '@functions/estree/isClassExpression';

/**
 * Checks that an `unknown` value is a {@link Class}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following types:
 *     - `ClassDeclaration`
 *     - `ClassExpression`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Class}.
 */
export const isClass = (value: unknown): value is Class =>
	/**
	 * value
	 */
	isClassDeclaration(value) ||
	isClassExpression(value);
