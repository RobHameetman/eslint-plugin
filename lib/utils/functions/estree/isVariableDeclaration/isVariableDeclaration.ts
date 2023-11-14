import type { VariableDeclaration } from 'estree';
import { isBaseDeclaration } from '@functions/estree/isBaseDeclaration';

/**
 * Checks that an `unknown` value is a {@link VariableDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseDeclaration`.
 *   - `value.type` is required and must be `'VariableDeclaration'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link VariableDeclaration}.
 */
export const isVariableDeclaration = (value: unknown): value is VariableDeclaration =>
	/**
	 * value
	 */
	isBaseDeclaration(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'VariableDeclaration';
