import type { Settings } from '@/utils/types/misc/Settings';
import type { ListenerFactory } from '@/utils/types/listeners/ListenerFactory';

declare module 'eslint' {
	export interface ESLint {
		lintFiles(patterns: string | Array<string>): Promise<Array<ESLint.LintResultWithConfig>>
	}

	export namespace ESLint {
		export interface LintResultWithConfig extends ESLint.LintResult {
			config?: Linter.Config<Linter.RulesRecord>;
		}

		export type LintResults = ReadonlyArray<ESLint.LintResult>;
	}

	export namespace Linter {
		export type FlatConfigArray = Array<FlatConfig>;
	}

	export namespace Rule {
		/**
		 * The context object contains additional functionality that is helpful for
		 * rules to do their jobs. As the name implies, the context object contains
		 * information that is relevant to the context of the rule.
		 *
		 * @see https://eslint.org/docs/developer-guide/working-with-rules#the-context-object
		 *
		 * @typeParam T - [Optional] A union of interfaces for any top-level object
		 * types defined in the schema. This param is used in the `CustomESLintRule`
		 * class and accepts the options type inferred from the schema passed to the
		 * constructor.
		 */
		interface Context<
			T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>,
		> extends Omit<RuleContext, 'options' | 'settings'> {
			readonly options: T;
			readonly settings?: Settings;
		}

		/**
		 * ESLint rules work by returning a `RuleModule` object from their
		 * entrypoint. This object contains a `create()` method which returns a
		 * `RuleListener` object. It may also contain a `meta` object which provides
		 * metadata for the rule.
		 *
		 * We're extending ESLint's `RuleModule` interface to add a `create()`
		 * method with the extended context type above. This allows us to specify
		 * the type of the options object which is passed to the `create()` method
		 * in the `CustomESLintRule` class.
		 *
		 * @typeParam T - [Optional] A union of interfaces for any top-level object
		 * types defined in the schema. This param is used in the `CustomESLintRule`
		 * class and accepts the options type inferred from the schema passed to the
		 * constructor.
		 */
		interface Module<
			T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>,
		> extends Omit<RuleModule, 'create'> {
			readonly create: ListenerFactory<T>;
		}
	}
}
