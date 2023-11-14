import type { BasePattern } from 'estree';
import { isBaseNode } from '@functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link BasePattern}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BasePattern}.
 */
export const isBasePattern = (value: unknown): value is BasePattern =>
	/**
	 * value
	 */
	isBaseNode(value);
