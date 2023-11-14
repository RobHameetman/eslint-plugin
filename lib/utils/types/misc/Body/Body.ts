import { isArray } from '@rob.hameetman/type-guards';
import { isBlockStatement } from '@functions/estree/isBlockStatement';
import { isClassBody } from '@functions/estree/isClassBody';
import { isDirective } from '@functions/estree/isDirective';
import { isMethodDefinition } from '@functions/estree/isMethodDefinition';
import { isModuleDeclaration } from '@functions/estree/isModuleDeclaration';
import { isPropertyDefinition } from '@functions/estree/isPropertyDefinition';
import { isStatement } from '@functions/estree/isStatement';
import { isStaticBlock } from '@functions/estree/isStaticBlock';
import { BodyOf } from '@type/misc/BodyOf';
import { ListenerNode } from '@type/misc/ListenerNode';

/**
 * A "listener" is a validation function to be included in an ESLint
 * `NodeListener` object, which receives a specific node object as an argument
 * depending on the `NodeListener` key to which it is attached. This type
 * represents the possible value of the `body` key of a union of all possible
 * node object arguments. It is used in Custom ESLint rule validation `task`s
 * which should be broken up into multiple, testable functions.
 */
export type Body = BodyOf<ListenerNode>;

/**
 * Checks that an `unknown` value is a `Body`.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following:
 *     - `BlockStatement`
 *     - `ClassBody`
 *     - `Statement`
 *     - `ReadonlyArray<Statement>`
 *     - `ReadonlyArray<MethodDefinition | PropertyDefinition | StaticBlock>`
 *     - `ReadonlyArray<Directive | Statement | ModuleDeclaration>`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not `Body`.
 */
export const isBody = (
	value: unknown,
): value is Body =>
	/**
	 * value
	 */
	isArray(value)
		? (value.every(isStatement) ||
			value.every((item) =>
				isMethodDefinition(item) ||
				isPropertyDefinition(item) ||
				isStaticBlock(item)) ||
			value.every((item) =>
				isDirective(item) ||
				isStatement(item) ||
				isModuleDeclaration(item)
			))
		: (isBlockStatement(value) ||
			isClassBody(value) ||
			isStatement(value));
