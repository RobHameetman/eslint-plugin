import type { MaybeNamedFunctionDeclaration } from 'estree';
import { isBaseDeclaration } from '@functions/estree/isBaseDeclaration';
import { isBaseFunction } from '@functions/estree/isBaseFunction';

/**
 * Checks that an `unknown` value is a {@link MaybeNamedFunctionDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseFunction` and `BaseDeclaration`.
 *   - `value.type` is required and must be `'FunctionDeclaration'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link MaybeNamedFunctionDeclaration}.
 */
export const isMaybeNamedFunctionDeclaration = (value: unknown): value is MaybeNamedFunctionDeclaration =>
	/**
	 * value
	 */
	isBaseFunction(value) &&
	isBaseDeclaration(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'FunctionDeclaration';
