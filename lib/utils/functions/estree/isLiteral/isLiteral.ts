import type { Literal } from 'estree';
import { isBigIntLiteral } from '@/utils/functions/estree/isBigIntLiteral';
import { isRegExpLiteral } from '@/utils/functions/estree/isRegExpLiteral';
import { isSimpleLiteral } from '@/utils/functions/estree/isSimpleLiteral';

/**
 * Checks that an `unknown` value is a {@link Literal}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following types:
 *     - `BigIntLiteral`
 *     - `RegExpLiteral`
 *     - `SimpleLiteral`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Literal}.
 */
export const isLiteral = (value: unknown): value is Literal =>
	/**
	 * value
	 */
	isBigIntLiteral(value) ||
	isRegExpLiteral(value) ||
	isSimpleLiteral(value);
