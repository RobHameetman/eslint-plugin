import type { FlatCompat } from '@eslint/eslintrc';
import { isArray, isBoolean, isObject, isString } from '@rob.hameetman/type-guards';

/**
 * Represents a config object compatible with older versions of ESLint
 * (pre-9.0.0). This type is used in the `flatten()` function as the type of
 * config that can be passed in.
 */
export type LegacyConfig = Exclude<Parameters<FlatCompat['config']>[number], undefined>;

/**
 * Checks that an `unknown` value is a {@link LegacyConfig}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.extends` is optional and must be a string or an array of strings if provided.
 *   - `value.globals` is optional and must be a valid globals object if provided.
 *   - `value.ignorePatterns` is optional and must be a string or an array of strings if provided.
 *   - `value.plugins` is optional and must be an array of strings if provided.
 *   - `value.rules` is optional and must be an object if provided.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link LegacyConfig}.
 */
export const isLegacyConfig = (
	value: unknown,
): value is LegacyConfig =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.extends
	 */
	('extends' in value
		? (isString(value.extends) || (isArray(value.extends) && value.extends.every(isString)))
		: true) &&
	/**
	 * value.globals
	 */
	('globals' in value
		? (
			isObject(value.globals) &&
			Object.values(value.globals).every((v) =>
				isBoolean(v) || ['off', 'readonly', 'readable', 'writable', 'writeable'].includes(String(v))
			))
		: true) &&
	/**
	 * value.ignorePatterns
	 */
	('ignorePatterns' in value
		? (isString(value.ignorePatterns) || (isArray(value.ignorePatterns) && value.ignorePatterns.every(isString)))
		: true) &&
	/**
	 * value.plugins
	 */
	('plugins' in value
		? (isArray(value.plugins) && value.plugins.every(isString))
		: true) &&
		/**
		 * value.rules
		 */
		('rules' in value
			? isObject(value.rules)
			: true);
