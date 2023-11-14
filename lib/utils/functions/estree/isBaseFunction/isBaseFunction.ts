import type { BaseFunction } from 'estree';
import { isBoolean, isUndefined } from '@rob.hameetman/type-guards';
import { arePatterns } from '@functions/estree/arePatterns';
import { isBaseNode } from '@functions/estree/isBaseNode';
import { isBlockStatement } from '@functions/estree/isBlockStatement';
import { isExpression } from '@functions/estree/isExpression';

/**
 * Checks that an `unknown` value is a {@link BaseFunction}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *   - `value.async` is optional and must be a boolean or `undefined` if provided.
 *   - `value.body` is required must be a valid `BlockStatement` or `Expression`.
 *   - `value.generator` is optional and must be a valid boolean or `undefined` if provided.
 *   - `value.params` is required and must be an array of valid `Patterns`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BaseFunction}.
 */
export const isBaseFunction = (value: unknown): value is BaseFunction =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	/**
	 * value.async
	 */
	('async' in value
		? (isBoolean(value.async) || isUndefined(value.async))
		: true) &&
	/**
	 * value.body
	 */
	'body' in value &&
	(isBlockStatement(value.body) || isExpression(value.body)) &&
	/**
	 * value.generator
	 */
	('generator' in value
		? (isBoolean(value.generator) || isUndefined(value.generator))
		: true) &&
	/**
	 * value.params
	 */
	'params' in value &&
	arePatterns(value.params);
