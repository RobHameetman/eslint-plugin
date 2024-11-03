import { isObject } from '@rob.hameetman/type-guards';
import { Selectors, areSelectors } from '@/utils/types/listeners/Selectors';
import { CurriedHandler, isCurriedHandler } from '@/utils/types/handlers/CurriedHandler';

/**
 * A destructured input object for the `validate()` method on the
 * `CustomESLintRule` class.
 */
export interface HandleInput<
	T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>,
	U extends Selectors = Selectors,
> {
	/**
	 * An array of AST selectors to be evaluated by the task() callback.
	 */
	readonly selectors: U;

	/**
	 * A callback triggered by ESLint for the provided AST selectors. This
	 * function is basically where all the magic happens in your custom rule.
	 */
	readonly onLint: CurriedHandler<T, U>;
}

/**
 * Checks that an `unknown` value is a {@link HandleInput}.
 *
 * Requirements:
 *   - `value` must be an object
 *   - `value.selectors` is required and must be valid `Selectors`
 *   - `value.onLint` is required and must be a valid `CurriedHandler`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link HandleInput}.
 */
export const isHandleInput = (value: unknown): value is HandleInput =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.selectors
	 */
	'selectors' in value &&
	areSelectors(value.selectors) &&
	/**
	 * value.onLint()
	 */
	'onLint' in value &&
	isCurriedHandler(value.onLint);
