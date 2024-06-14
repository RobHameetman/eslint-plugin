import { Rule } from 'eslint';
import type { Node } from 'estree';
import query from 'esquery';
import { isASTNodeType } from '@/utils/enums/ASTNodeTypes';

/**
 * A selector is a string that can be used to match nodes in the AST. These are
 * the keys of the objects returned by a custom rule's `create()` method. These
 * are usually just one node identifier but may include a more complex selector.
 *
 * @example
 * 'CallExpression[callee.name="setTimeout"][arguments.length!=2]'
 * 'IfStatement > :not(BlockStatement).consequent'
 *
 * @see https://eslint.org/docs/latest/extend/selectors
 */
export type Selector =
	| keyof Rule.NodeListener
	| `${keyof Rule.NodeListener}${string}`
	| `${string}${keyof Rule.NodeListener}${string}`
	| '*'
	| `*${string}`
	| `${string}*${string}`;

/**
 * @internal
 * Throws an error in isSelector() if the selector is invalid so that the loop
 * can be broken and false can be returned.
 */
const checkSelector = (selector: query.SubjectSelector) => {
	if (!('value' in selector)) {
		throw new Error(`Invalid selector: ${selector}`);
	}

	if (!isASTNodeType(selector.value as keyof Node)) {
		throw new Error(`Invalid selector: ${selector.value}`);
	}
}

/**
 * Checks that an `unknown` value are {@link Selectors}.
 *
 * Requirements:
 *   - `value` must be an array of `Selector`s
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` are or are not {@link Selectors}.
 */
export const isSelector = (value: unknown): value is Selector => {
	try {
		if (!value) {
			return false;
		}

		const result = query.parse((value as string).replace(/:exit$/u, ''));

		/**
		 * esquery doesn't validate whether a substring it flags as an identifier is a
		 * valid AST node type so we iterate over the returned selectors and check
		 * that the value of each identifier is a valid AST node type. If we find one
		 * that isn't, we throw an error to break the loop and return `false`. The
		 * result itself may also be an identifier, in which case we check it
		 * directly.
		 */
		if ('selectors' in result) {
			result.selectors
				.filter(({ type }) => type === 'identifier')
				.forEach(checkSelector)
		} else if ('type' in result && result.type === 'identifier') {
			checkSelector(result);
		}

		return true;
	} catch {
		return false;
	}
};
