import type { ImportNamespaceSpecifier } from 'estree';
import { isBaseModuleSpecifier } from '@functions/estree/isBaseModuleSpecifier';

/**
 * Checks that an `unknown` value is a {@link ImportNamespaceSpecifier}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseModuleSpecifier`.
 *   - `value.type` is required and must be `'ImportNamespaceSpecifier'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ImportNamespaceSpecifier}.
 */
export const isImportNamespaceSpecifier = (value: unknown): value is ImportNamespaceSpecifier =>
	/**
	 * value
	 */
	isBaseModuleSpecifier(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ImportNamespaceSpecifier';
