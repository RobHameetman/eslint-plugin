import type { FunctionDeclaration } from 'estree';
import { isMaybeNamedFunctionDeclaration } from '@/utils/functions/estree/isMaybeNamedFunctionDeclaration';
import { isIdentifier } from '@/utils/functions/estree/isIdentifier';

/**
 * Checks that an `unknown` value is a {@link FunctionDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid `MaybeNamedFunctionDeclaration`.
 *   - `value.id` is required and must be a valid `Identifier`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link FunctionDeclaration}.
 */
export const isFunctionDeclaration = (value: unknown): value is FunctionDeclaration =>
	/**
	 * value
	 */
	isMaybeNamedFunctionDeclaration(value) &&
	/**
	 * value.id
	 */
	'id' in value &&
	isIdentifier(value.id);
