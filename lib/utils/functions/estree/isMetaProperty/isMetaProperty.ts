import type { MetaProperty } from 'estree';
import { isBasePattern } from '@functions/estree/isBasePattern';

/**
 * Checks that an `unknown` value is a {@link MetaProperty}.
 *
 * Requirements:
 *   - `value` must be a valid `BasePattern`.
 *   - `value.type` is required and must be the string `'MetaProperty'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link MetaProperty}.
 */
export const isMetaProperty = (value: unknown): value is MetaProperty =>
	/**
	 * value
	 */
	isBasePattern(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'MetaProperty';
