import type { BaseStatement } from 'estree';
import { isBaseNode } from '@/utils/functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link BaseStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BaseStatement}.
 */
export const isBaseStatement = (value: unknown): value is BaseStatement =>
	/**
	 * value
	 */
	isBaseNode(value);
