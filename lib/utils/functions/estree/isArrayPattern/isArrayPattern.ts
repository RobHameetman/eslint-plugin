import type { ArrayPattern } from 'estree';
import { isBasePattern } from '@/utils/functions/estree/isBasePattern';

/**
 * Checks that an `unknown` value is a {@link ArrayPattern}.
 *
 * Requirements:
 *   - `value` must be a valid `BasePattern`.
 *   - `value.type` is required and must be `'ArrayPattern'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ArrayPattern}.
 */
export const isArrayPattern = (value: unknown): value is ArrayPattern =>
	/**
	 * value
	 */
	isBasePattern(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ArrayPattern';
