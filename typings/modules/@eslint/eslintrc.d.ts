declare module '@eslint/eslintrc' {
	import type { ESLint, Linter } from 'eslint';

	export interface FlatCompatOptions {
		readonly baseDirectory?: string;
		readonly resolvePluginsRelativeTo?: string;
		readonly recommendedConfig?: ESLint.ConfigData | Linter.FlatConfig | Linter.FlatConfig[];
		readonly allConfig?: ESLint.ConfigData | Linter.FlatConfig | Linter.FlatConfig[];
	}

	export class FlatCompat {
		constructor(options?: FlatCompatOptions);

		env(value?: ESLint.Environment): Linter.FlatConfigArray;
		extends(value?: string | string[]): Linter.FlatConfigArray;
		config(value?: ESLint.ConfigData | Linter.FlatConfig | Linter.FlatConfig[]): Linter.FlatConfigArray;
		plugins(value?: string | string[]): Linter.FlatConfigArray;
	}
}
