import type { ContinueStatement } from 'estree';
import { isBaseStatement } from '@/utils/functions/estree/isBaseStatement';

/**
 * Checks that an `unknown` value is a {@link ContinueStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseStatement`.
 *   - `value.type` is required and must be the string `'ContinueStatement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ContinueStatement}.
 */
export const isContinueStatement = (value: unknown): value is ContinueStatement =>
	/**
	 * value
	 */
	isBaseStatement(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ContinueStatement';
