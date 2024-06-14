const { ESLINT_ALLOWED_TYPE_NAMING_PREFIXES = '', ESLINT_ALLOWED_TYPE_NAMING_PREFIXES_DELIMITER = ',' } = process.env;

/**
 * A list of allowed name prefixes in cases where a pattern or naming convention
 * might require it, so as to avoid spamming eslint-ignore comments. Prefixes
 * must always be followed by one or more underscores. The delimiter is a comma
 * by default but may be changed through an environment variable.
 *
 * @example
 * type Test_NotAValidNamingConvention = // ...
 * class Mock__optimizely_client { ... }
 */
export const ALLOWED_TYPE_NAMING_PREFIXES = Object.freeze(
	ESLINT_ALLOWED_TYPE_NAMING_PREFIXES.length
		? ESLINT_ALLOWED_TYPE_NAMING_PREFIXES.split(ESLINT_ALLOWED_TYPE_NAMING_PREFIXES_DELIMITER)
		: []);
