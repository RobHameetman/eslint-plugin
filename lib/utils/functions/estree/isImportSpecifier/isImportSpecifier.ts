import type { ImportSpecifier } from 'estree';
import { isBaseModuleSpecifier } from '@functions/estree/isBaseModuleSpecifier';

/**
 * Checks that an `unknown` value is a {@link ImportSpecifier}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseModuleSpecifier`.
 *   - `value.type` is required and must be `'ImportSpecifier'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ImportSpecifier}.
 */
export const isImportSpecifier = (value: unknown): value is ImportSpecifier =>
	/**
	 * value
	 */
	isBaseModuleSpecifier(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ImportSpecifier';
