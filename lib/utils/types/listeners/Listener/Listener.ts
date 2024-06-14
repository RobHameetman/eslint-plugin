import { Rule } from 'eslint';
import { isObject } from '@rob.hameetman/type-guards';
import { isHandler } from '@/utils/types/handlers/Handler';
import { Selector } from '@/utils/types/listeners/Selector';
import { Selectors } from '@/utils/types/listeners/Selectors';

/**
 * Represents an object which is a subtype of the ESLint
 * {@link Rule.NodeListener} object, including only specified keys. For instance,
 * the type `Handlers<'ArrayExpression' | 'BinaryExpression'>` resolves to:
 *
 * ```TypeScript
 * {
 * 	ArrayExpression?: ((node: ESTree.ArrayExpression & NodeParentExtension) => void) | undefined;
 *  BinaryExpression?: ((node: ESTree.BinaryExpression & NodeParentExtension) => void) | undefined;
 * }
 * ```
 *
 * This type is used under the hood by the `CustomESLintRule` class to determine
 * what type of node object your validation `task` should receive as an argument.
 *
 * @typeParam T - A union of selectors (e.g. `'ArrayExpression' | 'BinaryExpression'`.)
 */
export type Listener<T extends Selector = Selector> = Omit<
	Rule.NodeListener,
	Exclude<keyof Rule.NodeListener, T>
>;

/**
 * Checks that an `unknown` value is a {@link Listener<T>}.
 *
 * Requirements:
 *   - `value` must be an object which includes all provided keys
 *
 * @param value - An `unknown` value.
 * @param selectors - An array of selectors required for the value to pass.
 *
 * @returns The determination that `value` is or is not a {@link Listener<T>}.
 */
export const isListener = <T extends Selector = Selector>(
	value: unknown,
	selectors: Selectors,
): value is Listener<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	Object.entries(value).every(
		([key, val]) => selectors.map(String).includes(key) && isHandler(val),
	);
