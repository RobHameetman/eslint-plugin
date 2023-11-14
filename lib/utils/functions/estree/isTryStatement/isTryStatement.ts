import type { TryStatement } from 'estree';
import { isBaseStatement } from '@functions/estree/isBaseStatement';

/**
 * Checks that an `unknown` value is a {@link TryStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseStatement`.
 *   - `value.type` is required and must be the string `'TryStatement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TryStatement}.
 */
export const isTryStatement = (value: unknown): value is TryStatement =>
	/**
	 * value
	 */
	isBaseStatement(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'TryStatement';
