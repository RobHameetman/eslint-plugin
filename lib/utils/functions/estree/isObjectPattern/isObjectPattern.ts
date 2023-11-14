import type { ObjectPattern } from 'estree';
import { isBasePattern } from '@functions/estree/isBasePattern';

/**
 * Checks that an `unknown` value is a {@link ObjectPattern}.
 *
 * Requirements:
 *   - `value` must be a valid `BasePattern`.
 *   - `value.type` is required and must be `'ObjectPattern'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ObjectPattern}.
 */
export const isObjectPattern = (value: unknown): value is ObjectPattern =>
	/**
	 * value
	 */
	isBasePattern(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ObjectPattern';
