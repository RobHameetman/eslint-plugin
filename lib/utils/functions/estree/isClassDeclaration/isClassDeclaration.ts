import type { ClassDeclaration } from 'estree';
import { isMaybeNamedClassDeclaration } from '@functions/estree/isMaybeNamedClassDeclaration';
import { isIdentifier } from '@functions/estree/isIdentifier';

/**
 * Checks that an `unknown` value is a {@link ClassDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid `MaybeNamedClassDeclaration`.
 *   - `value.id` is required and must be a valid `Identifier`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ClassDeclaration}.
 */
export const isClassDeclaration = (value: unknown): value is ClassDeclaration =>
	/**
	 * value
	 */
	isMaybeNamedClassDeclaration(value) &&
	/**
	 * value.id
	 */
	'id' in value &&
	isIdentifier(value.id);
