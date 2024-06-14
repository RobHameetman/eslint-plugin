import type { DoWhileStatement } from 'estree';
import { isBaseStatement } from '@/utils/functions/estree/isBaseStatement';

/**
 * Checks that an `unknown` value is a {@link DoWhileStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseStatement`.
 *   - `value.type` is required and must be the string `'DoWhileStatement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link DoWhileStatement}.
 */
export const isDoWhileStatement = (value: unknown): value is DoWhileStatement =>
	/**
	 * value
	 */
	isBaseStatement(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'DoWhileStatement';
