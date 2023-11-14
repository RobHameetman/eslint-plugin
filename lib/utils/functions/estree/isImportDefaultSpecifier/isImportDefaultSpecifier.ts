import type { ImportDefaultSpecifier } from 'estree';
import { isBaseModuleSpecifier } from '@functions/estree/isBaseModuleSpecifier';

/**
 * Checks that an `unknown` value is a {@link ImportDefaultSpecifier}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseModuleSpecifier`.
 *   - `value.type` is required and must be `'ImportDefaultSpecifier'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ImportDefaultSpecifier}.
 */
export const isImportDefaultSpecifier = (value: unknown): value is ImportDefaultSpecifier =>
	/**
	 * value
	 */
	isBaseModuleSpecifier(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ImportDefaultSpecifier';
