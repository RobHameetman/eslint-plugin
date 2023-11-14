import type { MaybeNamedClassDeclaration } from 'estree';
import { isBaseClass } from '@functions/estree/isBaseClass';
import { isBaseDeclaration } from '@functions/estree/isBaseDeclaration';

/**
 * Checks that an `unknown` value is a {@link MaybeNamedClassDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseClass` and `BaseDeclaration`.
 *   - `value.type` is required and must be `'ClassDeclaration'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link MaybeNamedClassDeclaration}.
 */
export const isMaybeNamedClassDeclaration = (value: unknown): value is MaybeNamedClassDeclaration =>
	/**
	 * value
	 */
	isBaseClass(value) &&
	isBaseDeclaration(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ClassDeclaration';
