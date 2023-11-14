import type { ForStatement } from 'estree';
import { isBaseStatement } from '@functions/estree/isBaseStatement';

/**
 * Checks that an `unknown` value is a {@link ForStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseStatement`.
 *   - `value.type` is required and must be the string `'ForStatement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ForStatement}.
 */
export const isForStatement = (value: unknown): value is ForStatement =>
	/**
	 * value
	 */
	isBaseStatement(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ForStatement';
