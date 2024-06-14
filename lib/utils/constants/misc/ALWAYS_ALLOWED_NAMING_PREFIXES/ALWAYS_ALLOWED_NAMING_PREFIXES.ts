const { ESLINT_ALLOWED_NAMING_PREFIXES = '', ESLINT_ALLOWED_NAMING_PREFIXES_DELIMITER = ',' } = process.env;

/**
 * A list of allowed name prefixes in cases where a pattern or naming convention
 * might require it, so as to avoid spamming eslint-ignore comments. Prefixes
 * must always be followed by one or more underscores. The delimiter is a comma
 * by default but may be changed through an environment variable.
 *
 * @example
 * const Test_List_Of_Ids = ...; // ESLINT_ALLOWED_NAMING_PREFIXES=Test,test
 * const test_list_of_ids = ...; // ESLINT_ALLOWED_NAMING_PREFIXES=Test,test
 * type test__Ids = ...; // ESLINT_ALLOWED_NAMING_PREFIXES=Test,test
 * const test_list_of_ids = ...; // ESLINT_ALLOWED_NAMING_PREFIXES=Test/test, ESLINT_ALWAYS_ALLOWED_NAMING_PREFIXES_DELIMITER=/
 * class $_id_collection implements Mock<IdCollection> { ... } // ESLINT_ALLOWED_NAMING_PREFIXES=$
 */
export const ALWAYS_ALLOWED_NAMING_PREFIXES = Object.freeze(
	ESLINT_ALLOWED_NAMING_PREFIXES.length
		? ESLINT_ALLOWED_NAMING_PREFIXES.split(ESLINT_ALLOWED_NAMING_PREFIXES_DELIMITER)
		: []);
