/**
 * Checks that a config object is imported by verifying that it has at least one
 * key.
 *
 * @param config - A potential configuration object.
 *
 * @returns The determination that `config` is imported.
 */
export const isImported = (config: object) =>
	Boolean(Object.keys(config).length);
