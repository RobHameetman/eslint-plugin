import type { RegExpLiteral } from 'estree';
import { isObject, isString } from '@rob.hameetman/type-guards';
import { isBaseExpression } from '@functions/estree/isBaseExpression';
import { isBaseNode } from '@functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link RegExpLiteral}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode` and `BaseExpression`.
 *   - `value.regex` is required and must be an object.
 *   - `value.regex.flags` is required and must be a string.
 *   - `value.regex.pattern` is required and must be a string.
 *   - `value.type` is required and must be the string `'Literal'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link RegExpLiteral}.
 */
export const isRegExpLiteral = (value: unknown): value is RegExpLiteral =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	isBaseExpression(value) &&
	/**
	 * value.regex
	 */
	'regex' in value &&
	isObject(value.regex) &&
	/**
	 * value.regex.flags
	 */
	'flags' in value.regex &&
	isString(value.regex.flags) &&
	/**
	 * value.regex.pattern
	 */
	'pattern' in value.regex &&
	isString(value.regex.pattern) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'Literal';
