import type { CatchClause } from 'estree';
import { isBaseNode } from '@/utils/functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link CatchClause}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *   - `value.type` is required and must be the string `'CatchClause'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link CatchClause}.
 */
export const isCatchClause = (value: unknown): value is CatchClause =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'CatchClause';
