import type { BlockStatement, StaticBlock } from 'estree';
import { isBlockStatement } from '@functions/estree/isBlockStatement';

/**
 * Checks that an `unknown` value is a {@link StaticBlock}.
 *
 * Requirements:
 *   - `value` must be a valid `BlockStatement`.
 *   - `value.type` is required and must be the string `'StaticBlock'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link StaticBlock}.
 */
export const isStaticBlock = (value: unknown): value is StaticBlock =>
	/**
	 * value
	 */
	isBlockStatement<Omit<BlockStatement, 'type'>>(value, false) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'StaticBlock';
