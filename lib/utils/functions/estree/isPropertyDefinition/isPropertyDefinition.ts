import type { PropertyDefinition } from 'estree';
import { isBaseNode } from '@/utils/functions/estree/isBaseNode';
import { isPosition } from '@/utils/functions/estree/isPosition';
import { isString } from '@rob.hameetman/type-guards';

/**
 * Checks that an `unknown` value is a {@link PropertyDefinition}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *   - `value.type` is required and must be the string `'PropertyDefinition'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link PropertyDefinition}.
 */
export const isPropertyDefinition = (value: unknown): value is PropertyDefinition =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'PropertyDefinition';
