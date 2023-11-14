import type { RestElement } from 'estree';
import { isBasePattern } from '@functions/estree/isBasePattern';

/**
 * Checks that an `unknown` value is a {@link RestElement}.
 *
 * Requirements:
 *   - `value` must be a valid `BasePattern`.
 *   - `value.type` is required and must be the string `'RestElement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link RestElement}.
 */
export const isRestElement = (value: unknown): value is RestElement =>
	/**
	 * value
	 */
	isBasePattern(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'RestElement';
