import { isFunction } from '@rob.hameetman/type-guards';
import { Listener } from '@type/misc/Listener';
import { ListenerNode } from '@type/misc/ListenerNode';
import { ListenerTypeList } from '@type/misc/ListenerTypeList';
import { RuleContext } from '@type/misc/RuleContext';

/**
 * A curried function provided to `ValidateMethodInput['validate']`.
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in
 * the schema.
 * @typeParam U - An array of listener types which the task will evaluate. This
 * type is inferred by the array passed to `ValidateMethodInput['check']`.
 *
 * @privateRemarks
 *
 * You might wonder why this signature isn't just
 * `(context: RuleContext<T>) => Listener<U[number]>;`. While that is the more
 * correct signature, it results in an implicit `any` error because
 * `Listener<U[number]>` resolves to a union of `Listener` functions instead of
 * a single function signature where the `node` argument type is the union.
 */
export type ValidationTask<T = never, U extends ListenerTypeList = ListenerTypeList> =
	/**
	 * @param context - The `context` object passed in by ESLint during runtime.
	 */
	(context: RuleContext<T>) =>
		/**
		 * @privateRemarks
		 *
		 * Using `ts-expect-error` here because the below error is particularly
		 * nonsensical in that it's saying that `Listener<U[number]>` resolves to
		 * `unknown`. This is because `U` is inferred from the array provided to
		 * `ValidateMethodInput['check']`, so it could be instantiated with a
		 * subtype of type `U`. However, this is exactly the point, since we know
		 * that a subtype of type `U` must be a subset of `ListenerTypeList`. Also,
		 * weirdly, `Listener<U[number]>` does not actually resolve to `unknown`.
		 * The type-checking works as intended despite the error suggesting
		 * otherwise, and everything else I've tried always results in implicit
		 * `any` errors.
		 */
		/* @ts-expect-error - Type 'unknown' is not assignable to type... */
		(node: ListenerNode<Listener<U[number]>>) => void | undefined;

/**
 * Checks that an `unknown` value is a {@link ValidationTask<T>}.
 *
 * Requirements:
 *   - `value` must be a function which returns a function
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in
 * the schema.
 * @typeParam U - An array of listener types which the task will evaluate. This
 * type is inferred by the array passed to `ValidateMethodInput['check']`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ValidationTask<T>}.
 */
export const isValidationTask = <T = never, U extends ListenerTypeList = ListenerTypeList>(
	value: unknown,
): value is ValidationTask<T, U> =>
	/**
	 * value
	 */
	isFunction(value) &&
	isFunction(value({}));
