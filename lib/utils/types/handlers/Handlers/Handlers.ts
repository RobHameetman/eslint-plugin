import { isObject } from '@rob.hameetman/type-guards';
import { Selectors } from '@/utils/types/listeners/Selectors';
import { CurriedHandler, isCurriedHandler } from '@/utils/types/handlers/CurriedHandler';

/**
 * An internal object used by the `CustomESLintRule` class with methods that
 * ESLint calls to "visit" nodes while traversing the abstract syntax tree (AST
 * as defined by ESTree).
 *
 * @typeParam T - [Optional] A schema for a custom rule. This is inferred from
 * the schema passed in to the `CustomESLintRule` constructor.
 *
 * @typeParam U - A union of listener types defined in the schema.
 */
export type Handlers<
	T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>,
	S extends Selectors = Selectors,
> = {
	[K in S[number]]?: CurriedHandler<T, S>;
};

/**
 * Checks that an `unknown` value are {@link Handlers}.
 *
 * Requirements:
 *   - `value` must be a function which returns an object.
 *
 * @typeParam T - [Optional] A schema for a custom rule. This is inferred from
 * the schema passed in to the `CustomESLintRule` constructor.
 *
 * @param value - An `unknown` value.
 * @param keys - [Optional] An array of string keys to check for.
 *
 * @returns The determination that `value` are or are not {@link Handlers}.
 */
export const areHandlers = <
	T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>,
	S extends Selectors = Selectors,
>(
	value: unknown,
	selectors?: S,
): value is Handlers<T, S> =>
	/**
	 * value
	 */
	isObject(value) &&
	Object.values(value).every(isCurriedHandler) &&
	(selectors
		? Object.keys(value).every((selector) => selectors.map(String).includes(selector))
		: true);
