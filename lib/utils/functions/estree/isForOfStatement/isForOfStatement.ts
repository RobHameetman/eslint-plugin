import type { ForOfStatement } from 'estree';
import { isBaseForXStatement } from '@functions/estree/isBaseForXStatement';

/**
 * Checks that an `unknown` value is a {@link ForOfStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseForXStatement`.
 *   - `value.type` is required and must be the string `'ForOfStatement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ForOfStatement}.
 */
export const isForOfStatement = (value: unknown): value is ForOfStatement =>
	/**
	 * value
	 */
	isBaseForXStatement(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ForOfStatement';
