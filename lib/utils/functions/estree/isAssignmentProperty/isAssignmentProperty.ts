import type { AssignmentProperty } from 'estree';
import { isPattern } from '@functions/estree/isPattern';
import { isProperty } from '@functions/estree/isProperty';

/**
 * Checks that an `unknown` value is a {@link AssignmentProperty}.
 *
 * Requirements:
 *   - `value` must be a valid `Property`.
 *   - `value.kind` is required and must be `'init'`.
 *   - `value.method` is required and must be `false`.
 *   - `value.value` is required and must be a valid `Pattern`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link AssignmentProperty}.
 */
export const isAssignmentProperty = (value: unknown): value is AssignmentProperty =>
	/**
	 * value
	 */
	isProperty(value) &&
	/**
	 * value.kind
	 */
	'kind' in value &&
	value.kind === 'init' &&
	/**
	 * value.method
	 */
	'method' in value &&
	value.method === false &&
	/**
	 * value.value
	 */
	'value' in value &&
	isPattern(value.value);
