declare module '@eslint/compat' {
	import type { ESLint, Linter } from 'eslint';

	export function fixupConfigRules(config: ESLint.ConfigData | Linter.FlatConfig | Linter.FlatConfig[]): Linter.FlatConfigArray;
}
