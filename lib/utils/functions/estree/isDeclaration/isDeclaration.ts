import type { Declaration } from 'estree';
import { isClassDeclaration } from '@/utils/functions/estree/isClassDeclaration';
import { isFunctionDeclaration } from '@/utils/functions/estree/isFunctionDeclaration';
import { isVariableDeclaration } from '@/utils/functions/estree/isVariableDeclaration';

/**
 * Checks that an `unknown` value is a {@link Declaration}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following types:
 *     - `ClassDeclaration`
 *     - `FunctionDeclaration`
 *     - `VariableDeclaration`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Declaration}.
 */
export const isDeclaration = (value: unknown): value is Declaration =>
	/**
	 * value
	 */
	isClassDeclaration(value) ||
	isFunctionDeclaration(value) ||
	isVariableDeclaration(value);
