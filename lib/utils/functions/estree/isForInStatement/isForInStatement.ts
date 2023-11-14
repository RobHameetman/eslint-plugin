import type { ForInStatement } from 'estree';
import { isBaseForXStatement } from '@functions/estree/isBaseForXStatement';

/**
 * Checks that an `unknown` value is a {@link ForInStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseForXStatement`.
 *   - `value.type` is required and must be the string `'ForInStatement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ForInStatement}.
 */
export const isForInStatement = (value: unknown): value is ForInStatement =>
	/**
	 * value
	 */
	isBaseForXStatement(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ForInStatement';
