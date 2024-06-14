import type { SimpleCallExpression } from 'estree';
import { isBaseCallExpression } from '@/utils/functions/estree/isBaseCallExpression';

/**
 * Checks that an `unknown` value is a {@link SimpleCallExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseCallExpression`.
 *   - `value.type` is required and must be `'CallExpression'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link SimpleCallExpression}.
 */
export const isSimpleCallExpression = (value: unknown): value is SimpleCallExpression =>
	/**
	 * value
	 */
	isBaseCallExpression(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'CallExpression';
