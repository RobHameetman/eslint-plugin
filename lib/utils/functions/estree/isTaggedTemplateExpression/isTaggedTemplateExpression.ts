import type { TaggedTemplateExpression } from 'estree';
import { isBaseExpression } from '@/utils/functions/estree/isBaseExpression';

/**
 * Checks that an `unknown` value is a {@link TaggedTemplateExpression}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseExpression`.
 *   - `value.type` is required and must be `'TaggedTemplateExpression'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TaggedTemplateExpression}.
 */
export const isTaggedTemplateExpression = (value: unknown): value is TaggedTemplateExpression =>
	/**
	 * value
	 */
	isBaseExpression(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'TaggedTemplateExpression';
