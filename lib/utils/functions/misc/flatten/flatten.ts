import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules as _fixupConfigRules } from '@eslint/compat';
import type { LegacyConfig } from '@/utils/types/misc/LegacyConfig';

/**
 * Functional dependencies used in the {@link flatten()} function. This object is
 * provided in tests for mocking and spying.
 */
export interface FlattenDependencies {
	/**
	 * Accepts both a single object and an array of objects to easily update any
	 * configuration.
	 */
	readonly fixupConfigRules?: typeof _fixupConfigRules;
}

/**
 * Options for the {@link flatten()} function.
 */
export interface FlattenOptions {
	/**
	 * Whether to fixup the config rules by calling fixupConfigRules().
	 */
	readonly fixup?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: FlattenDependencies;
}

const $ = new FlatCompat();

const DEFAULT_OPTIONS: FlattenOptions = Object.freeze({
	fixup: false,
});

/**
 * Takes a {@link LegacyConfig} and returns it as a flat config.
 *
 * @param config - The {@link LegacyConfig} to flatten.
 * @param options - [Optional] The options to use when flattening the config.
 *
 * @returns A compatible flat config version of the given legacy config.
 */
export const flatten = (config: LegacyConfig | undefined, options = DEFAULT_OPTIONS) => {
	const { fixup, _dependencies = {} } = options;
	const { fixupConfigRules = _fixupConfigRules } = _dependencies;

	return fixup
		? fixupConfigRules($.config(config))
		: $.config(config);
};
