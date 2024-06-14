import type { EmptyStatement } from 'estree';
import { isBaseStatement } from '@/utils/functions/estree/isBaseStatement';

/**
 * Checks that an `unknown` value is a {@link EmptyStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseStatement`.
 *   - `value.type` is required and must be the string `'EmptyStatement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link EmptyStatement}.
 */
export const isEmptyStatement = (value: unknown): value is EmptyStatement =>
	/**
	 * value
	 */
	isBaseStatement(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'EmptyStatement';
