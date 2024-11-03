import type { AssignmentPattern } from 'estree';
import { isBasePattern } from '@/utils/functions/estree/isBasePattern';

/**
 * Checks that an `unknown` value is a {@link AssignmentPattern}.
 *
 * Requirements:
 *   - `value` must be a valid `BasePattern`.
 *   - `value.type` is required and must be `'AssignmentPattern'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link AssignmentPattern}.
 */
export const isAssignmentPattern = (value: unknown): value is AssignmentPattern =>
	/**
	 * value
	 */
	isBasePattern(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'AssignmentPattern';
