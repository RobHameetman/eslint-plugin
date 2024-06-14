import type { BaseModuleDeclaration } from 'estree';
import { isBaseNode } from '@/utils/functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link BaseModuleDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BaseModuleDeclaration}.
 */
export const isBaseModuleDeclaration = (value: unknown): value is BaseModuleDeclaration =>
	/**
	 * value
	 */
	isBaseNode(value);
