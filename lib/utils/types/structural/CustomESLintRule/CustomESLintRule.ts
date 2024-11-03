import type { Rule } from 'eslint';
import { Categories } from '@/utils/enums/Categories';
import { RuleTypes } from '@/utils/enums/RuleTypes';
import { ruleUrl } from '@/utils/functions/misc/ruleUrl';
import type { CurriedHandler } from '@/utils/types/handlers/CurriedHandler';
import type { Handlers } from '@/utils/types/handlers/Handlers';
import type { Selectors } from '@/utils/types/listeners/Selectors';
// import type { RuleContext } from '@/utils/types/misc/Context';
// import type { RuleModule } from '@/utils/types/misc/CustomRuleModule';
import type { FromSchema } from '@/utils/types/misc/FromSchema';
import type { $MetaMethodInput } from '@/utils/types/structural/$MetaMethodInput';
import type { HandleInput } from '@/utils/types/structural/HandleInput';

/**
 * A façade class used to improve the experience of creating new custom ESLint
 * rules. This class abstracts over some of ESLint's gotchas so that those with
 * less experience writing custom ESLint rules don't have to read as much of
 * the documentation. It also implements ESLint's `RuleModule` interface, so an
 * instance of a `CustomESLintRule` may be provided directly to ESLint.
 */
export class CustomESLintRule<S extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>, T extends FromSchema<S> = FromSchema<S>> implements Rule.Module<T> {
	/**
	 * The internal object with handlers that ESLint calls to "visit" nodes while
	 * traversing the abstract syntax tree (AST as defined by ESTree).
	 */
	private _handlers: Handlers<T> = {};

	/**
	 * Contains metadata for the rule.
	 */
	private _meta: Rule.Module<T>['meta'];

	/**
	 * Instantiating a new `CustomESLintRule` requires a schema which specifies
	 * the options so ESLint can prevent invalid rule configurations.
	 */
	constructor(schema?: S) {
		this._meta = {
			...(this._meta || {}),
			schema: [
				...(this._meta?.schema instanceof Array ? this._meta?.schema : []),
				...(schema instanceof Array ? schema : []),
			],
		};
	}

	/**
	 * Public getter for `this._meta`. This allows us to update the rule's
	 * metadata internally while preventing any unwanted external state changes.
	 */
	get meta(): Rule.Module<T>['meta'] {
		return this._meta;
	}

	/**
	 * Returns an object with methods that ESLint calls to "visit" nodes while
	 * traversing the abstract syntax tree (AST as defined by ESTree).
	 */
	create = (context: Rule.Context<T>, handlers = this._handlers) => {
		return Object.entries(handlers)
			.reduce<Rule.RuleListener>(
				(prev, [key, handler]) => {
					const next = { ...prev };

					if (handler !== undefined) {
						next[key] = handler(context);
					}

					return next;
				},
				{} as Rule.RuleListener,
			);
	}

	/**
	 * Sets the metadata for the rule.
	 */
	$meta({
		category,
		deprecated,
		description,
		hasSuggestions,
		name,
		recommended,
	}: $MetaMethodInput): this {
		const isDeprecated =
			deprecated ||
			category === Categories.Deprecated ||
			category === Categories.Removed;

		const isSuggestion =
			hasSuggestions ||
			category === Categories.Suggestions;

		const meta = {
			...(this._meta || {}),
			docs: {
				...(this._meta?.docs || {}),
				description,
				category,
				recommended,
				url: ruleUrl(name),
			},
		};

		if (category === Categories.LayoutAndFormatting) {
			meta.type = RuleTypes.layout;
		}

		if (category === Categories.PossibleProblems) {
			meta.type = RuleTypes.problem;
		}

		if (isDeprecated) {
			meta.deprecated = true;
		}

		if (isSuggestion) {
			meta.hasSuggestions = true;
			meta.type = RuleTypes.suggestion;
		}

		this._meta = meta;

		return this;
	}

	/**
	 * Returns the rule object provided to ESLint as an object literal instead of
	 * an instance of the `CustomESLintRule` class.
	 */
	pure() {
		return {
			meta: { ...this._meta },
			create: ((context: Rule.RuleContext) => {
				const handlers = { ...this._handlers };

				return this.create(context as Rule.Context<T> & Rule.RuleContext, handlers);
			}),
		} as Rule.RuleModule;
	}

	/**
	 * Add an ESTree evaluation function to the internal map of handlers returned
	 * by the `create()` method.
	 */
	handle<U extends Selectors = Selectors>({
		selectors,
		onLint: handler,
	}: HandleInput<T, U>): this {
		selectors.forEach((selector) => {
			this._handlers[selector] = handler as CurriedHandler<T>;
		});

		return this;
	}
};

/**
 * Checks that an `unknown` value is a {@link CustomESLintRule}.
 *
 * Requirements:
 *   - `value` must be an instance of the `CustomESLintRule` class
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link CustomESLintRule}.
 */
export const isCustomESLintRule = <
	S extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>,
	T extends FromSchema<S> = FromSchema<S>,
>(
	value: unknown,
): value is CustomESLintRule<S, T> =>
	/**
	 * value
	 */
	value instanceof CustomESLintRule;
