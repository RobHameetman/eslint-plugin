import type { ImportDeclaration } from 'estree';
import { isBaseModuleDeclaration } from '@functions/estree/isBaseModuleDeclaration';

/**
 * Checks that an `unknown` value is a {@link ImportDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseModuleDeclaration`.
 *   - `value.type` is required and must be `'ImportDeclaration'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ImportDeclaration}.
 */
export const isImportDeclaration = (value: unknown): value is ImportDeclaration =>
	/**
	 * value
	 */
	isBaseModuleDeclaration(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ImportDeclaration';
