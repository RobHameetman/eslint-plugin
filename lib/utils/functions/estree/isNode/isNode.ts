import type { Node } from 'estree';
import { isAssignmentProperty } from '@/utils/functions/estree/isAssignmentProperty';
import { isCatchClause } from '@/utils/functions/estree/isCatchClause';
import { isClass } from '@/utils/functions/estree/isClass';
import { isClassBody } from '@/utils/functions/estree/isClassBody';
import { isExpression } from '@/utils/functions/estree/isExpression';
import { isFunction } from '@/utils/functions/estree/isFunction';
import { isIdentifier } from '@/utils/functions/estree/isIdentifier';
import { isLiteral } from '@/utils/functions/estree/isLiteral';
import { isMethodDefinition } from '@/utils/functions/estree/isMethodDefinition';
import { isModuleDeclaration } from '@/utils/functions/estree/isModuleDeclaration';
import { isModuleSpecifier } from '@/utils/functions/estree/isModuleSpecifier';
import { isPattern } from '@/utils/functions/estree/isPattern';
import { isPrivateIdentifier } from '@/utils/functions/estree/isPrivateIdentifier';
import { isProgram } from '@/utils/functions/estree/isProgram';
import { isProperty } from '@/utils/functions/estree/isProperty';
import { isPropertyDefinition } from '@/utils/functions/estree/isPropertyDefinition';
import { isSpreadElement } from '@/utils/functions/estree/isSpreadElement';
import { isStatement } from '@/utils/functions/estree/isStatement';
import { isSuper } from '@/utils/functions/estree/isSuper';
import { isSwitchCase } from '@/utils/functions/estree/isSwitchCase';
import { isTemplateElement } from '@/utils/functions/estree/isTemplateElement';
import { isVariableDeclarator } from '@/utils/functions/estree/isVariableDeclarator';

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
