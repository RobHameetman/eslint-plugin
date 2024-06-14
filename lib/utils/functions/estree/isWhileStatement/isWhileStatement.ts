import type { WhileStatement } from 'estree';
import { isBaseStatement } from '@/utils/functions/estree/isBaseStatement';

/**
 * Checks that an `unknown` value is a {@link WhileStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseStatement`.
 *   - `value.type` is required and must be the string `'WhileStatement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link WhileStatement}.
 */
export const isWhileStatement = (value: unknown): value is WhileStatement =>
	/**
	 * value
	 */
	isBaseStatement(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'WhileStatement';
