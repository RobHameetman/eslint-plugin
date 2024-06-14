import type { BlockStatement } from 'estree';
import { isBaseStatement } from '@/utils/functions/estree/isBaseStatement';

/**
 * Checks that an `unknown` value is a {@link BlockStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseStatement`.
 *   - `value.type` is required and must be the string `'BlockStatement'`.
 *
 * @typeParam T - [Optional] For the `StaticBlock` type we want to cast the
 * extended type as a subtype of `BlockStatement` without the `type` property.
 *
 * @param value - An `unknown` value.
 * @param checkType - [Optional] Set to `false` to bypass the `type` check. This
 * is useful for checking `StaticBlock` types.
 *
 * @returns The determination that `value` is or is not a {@link BlockStatement}.
 */
export const isBlockStatement = <T extends Omit<BlockStatement, 'type'> = BlockStatement>(
	value: unknown,
	checkType: boolean = true
): value is T =>
	/**
	 * value
	 */
	isBaseStatement(value) &&
	/**
	 * value.type
	 */
	(checkType
		? ('type' in value &&
			value.type === 'BlockStatement')
		: true);
