import { Rule } from 'eslint';
import { isFunction } from '@rob.hameetman/type-guards';
import { Handler } from '@/utils/types/handlers/Handler';
import { NodePassedTo } from '@/utils/types/handlers/NodePassedTo';
import { Selectors } from '@/utils/types/listeners/Selectors';

/**
 * A curried handler function which receives the `RuleContext` object passed in
 * by ESLint during runtime and returns a handler function. The curried function
 * is used to determine what type of node object your validation `task` should
 * receive as an argument.
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in
 * the schema.
 * @typeParam U - An array of selectors which the task will evaluate. This
 * type is inferred by the array passed to `HandleInput['onLint']`.
 *
 * @privateRemarks
 *
 * You might wonder why this signature isn't just
 * `(context: RuleContext<T>) => Handler<U[number]>;`. While that is the more
 * correct signature, it results in an implicit `any` error because
 * `Handler<U[number]>` resolves to a union of `Handler` functions instead of
 * a single function signature where the `node` argument type is the union.
 */
export type CurriedHandler<
	T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>,
	U extends Selectors = Selectors,
> =
	/**
	 * @param context - The `context` object passed in by ESLint during runtime.
	 */
	(context: Rule.Context<T>) =>
		// Handler<U[number]>;
	// (context: Rule.Context<T>, node: NodePassedTo<Handler<U[number]>>) => void | undefined;
		/**
		 * @privateRemarks
		 *
		 * Using `ts-expect-error` here because the below error is particularly
		 * nonsensical in that it's saying that `Handler<U[number]>` resolves to
		 * `unknown`. This is because `U` is inferred from the array provided to
		 * `HandleInput['onLint']`, so it could be instantiated with a
		 * subtype of type `U`. However, this is exactly the point, since we know
		 * that a subtype of type `U` must be a subset of `Selectors`. Also,
		 * weirdly, `Handler<U[number]>` does not actually resolve to `unknown`.
		 * The type-checking works as intended despite the error suggesting
		 * otherwise, and attempts to find a workaround always result in implicit
		 * `any` errors.
		 */
		/* @ts-expect-error - Type 'unknown' is not assignable to type... */
		(node: NodePassedTo<Handler<U[number]>>) => void | undefined;
		// Handler<U[number]>;

/**
 * Checks that an `unknown` value is a {@link CurriedHandler<T>}.
 *
 * Requirements:
 *   - `value` must be a function which returns a function
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in
 * the schema.
 * @typeParam U - An array of selectors which the task will evaluate. This
 * type is inferred by the array passed to `HandleInput['onLint']`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link CurriedHandler<T>}.
 */
export const isCurriedHandler = <
	T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>,
	U extends Selectors = Selectors,
>(
	value: unknown,
): value is CurriedHandler<T, U> =>
	/**
	 * value
	 */
	isFunction(value) &&
	isFunction(value({}));
