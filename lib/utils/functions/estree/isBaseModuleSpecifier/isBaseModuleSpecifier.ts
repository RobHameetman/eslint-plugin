import type { BaseModuleSpecifier } from 'estree';
import { isBaseNode } from '@/utils/functions/estree/isBaseNode';
import { isIdentifier } from '@/utils/functions/estree/isIdentifier';

/**
 * Checks that an `unknown` value is a {@link BaseModuleSpecifier}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *   - `value.local` is required must be a valid `Identifier`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BaseModuleSpecifier}.
 */
export const isBaseModuleSpecifier = (value: unknown): value is BaseModuleSpecifier =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	/**
	 * value.local
	 */
	'local' in value &&
	isIdentifier(value.local);
