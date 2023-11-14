import type { BreakStatement } from 'estree';
import { isBaseStatement } from '@functions/estree/isBaseStatement';

/**
 * Checks that an `unknown` value is a {@link BreakStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseStatement`.
 *   - `value.type` is required and must be the string `'BreakStatement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BreakStatement}.
 */
export const isBreakStatement = (value: unknown): value is BreakStatement =>
	/**
	 * value
	 */
	isBaseStatement(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'BreakStatement';
