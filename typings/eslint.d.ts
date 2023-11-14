import { ESLint } from 'eslint';

declare module 'eslint' {
	export interface ESLint {
		lintFiles(patterns: string | Array<string>): Promise<Array<ESLint.LintResultWithConfig>>
	}

	export namespace ESLint {
		export interface LintResultWithConfig extends ESLint.LintResult {
			config?: Linter.Config<Linter.RulesRecord>;
		}
	}

	export namespace Linter {
		export interface ConfigOverride<Rules extends RulesRecord = RulesRecord> extends BaseConfig<Rules> {
			readonly name?: string;
		}
	}
}
