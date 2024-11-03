import type { BaseDeclaration } from 'estree';
import { isBaseStatement } from '@/utils/functions/estree/isBaseStatement';

/**
 * Checks that an `unknown` value is a {@link BaseDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseStatement`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BaseDeclaration}.
 */
export const isBaseDeclaration = (value: unknown): value is BaseDeclaration =>
	/**
	 * value
	 */
	isBaseStatement(value);
