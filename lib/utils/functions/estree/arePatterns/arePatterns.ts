import type { Pattern } from 'estree';
import { isArray } from '@rob.hameetman/type-guards';
import { isPattern } from '@/utils/functions/estree/isPattern';

/**
 * Checks that an `unknown` value is a {@link ReadonlyArray<Pattern>}.
 *
 * Requirements:
 *   - `value` must be an array of valid `Pattern`s.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ReadonlyArray<Pattern>}.
 */
export const arePatterns = (value: unknown): value is ReadonlyArray<Pattern> =>
	/**
	 * value
	 */
	isArray(value) &&
	value.every(isPattern);
