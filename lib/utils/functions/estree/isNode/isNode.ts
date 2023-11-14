import type { Node } from 'estree';
import { isAssignmentProperty } from '@functions/estree/isAssignmentProperty';
import { isCatchClause } from '@functions/estree/isCatchClause';
import { isClass } from '@functions/estree/isClass';
import { isClassBody } from '@functions/estree/isClassBody';
import { isExpression } from '@functions/estree/isExpression';
import { isFunction } from '@functions/estree/isFunction';
import { isIdentifier } from '@functions/estree/isIdentifier';
import { isLiteral } from '@functions/estree/isLiteral';
import { isMethodDefinition } from '@functions/estree/isMethodDefinition';
import { isModuleDeclaration } from '@functions/estree/isModuleDeclaration';
import { isModuleSpecifier } from '@functions/estree/isModuleSpecifier';
import { isPattern } from '@functions/estree/isPattern';
import { isPrivateIdentifier } from '@functions/estree/isPrivateIdentifier';
import { isProgram } from '@functions/estree/isProgram';
import { isProperty } from '@functions/estree/isProperty';
import { isPropertyDefinition } from '@functions/estree/isPropertyDefinition';
import { isSpreadElement } from '@functions/estree/isSpreadElement';
import { isStatement } from '@functions/estree/isStatement';
import { isSuper } from '@functions/estree/isSuper';
import { isSwitchCase } from '@functions/estree/isSwitchCase';
import { isTemplateElement } from '@functions/estree/isTemplateElement';
import { isVariableDeclarator } from '@functions/estree/isVariableDeclarator';

/**
 * Checks that an `unknown` value is a {@link Node}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following types:
 *     - `AssignmentProperty`
 *     - `CatchClause`
 *     - `Class`
 *     - `ClassBody`
 *     - `Expression`
 *     - `Function`
 *     - `Identifier`
 *     - `Literal`
 *     - `MethodDefinition`
 *     - `ModuleDeclaration`
 *     - `ModuleSpecifier`
 *     - `Pattern`
 *     - `PrivateIdentifier`
 *     - `Program`
 *     - `Property`
 *     - `PropertyDefinition`
 *     - `SpreadElement`
 *     - `Statement`
 *     - `Super`
 *     - `SwitchCase`
 *     - `TemplateElement`
 *     - `VariableDeclarator`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Node}.
 */
export const isNode = (value: unknown): value is Node =>
	/**
	 * value
	 */
	isAssignmentProperty(value) ||
	isCatchClause(value) ||
	isClass(value) ||
	isClassBody(value) ||
	isExpression(value) ||
	isFunction(value) ||
	isIdentifier(value) ||
	isLiteral(value) ||
	isMethodDefinition(value) ||
	isModuleDeclaration(value) ||
	isModuleSpecifier(value) ||
	isPattern(value) ||
	isPrivateIdentifier(value) ||
	isProgram(value) ||
	isProperty(value) ||
	isPropertyDefinition(value) ||
	isSpreadElement(value) ||
	isStatement(value) ||
	isSuper(value) ||
	isSwitchCase(value) ||
	isTemplateElement(value) ||
	isVariableDeclarator(value);
