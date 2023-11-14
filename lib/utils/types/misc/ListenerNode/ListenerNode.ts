import { isObject } from '@rob.hameetman/type-guards';
import { isArrayExpression } from '@functions/estree/isArrayExpression';
import { isArrayPattern } from '@functions/estree/isArrayPattern';
import { isArrowFunctionExpression } from '@functions/estree/isArrowFunctionExpression';
import { isAssignmentExpression } from '@functions/estree/isAssignmentExpression';
import { isAssignmentPattern } from '@functions/estree/isAssignmentPattern';
import { isAwaitExpression } from '@functions/estree/isAwaitExpression';
import { isBinaryExpression } from '@functions/estree/isBinaryExpression';
import { isBlockStatement } from '@functions/estree/isBlockStatement';
import { isBreakStatement } from '@functions/estree/isBreakStatement';
import { isCallExpression } from '@functions/estree/isCallExpression';
import { isCatchClause } from '@functions/estree/isCatchClause';
import { isChainExpression } from '@functions/estree/isChainExpression';
import { isClassBody } from '@functions/estree/isClassBody';
import { isClassDeclaration } from '@functions/estree/isClassDeclaration';
import { isClassExpression } from '@functions/estree/isClassExpression';
import { isConditionalExpression } from '@functions/estree/isConditionalExpression';
import { isContinueStatement } from '@functions/estree/isContinueStatement';
import { isDebuggerStatement } from '@functions/estree/isDebuggerStatement';
import { isDoWhileStatement } from '@functions/estree/isDoWhileStatement';
import { isEmptyStatement } from '@functions/estree/isEmptyStatement';
import { isExportAllDeclaration } from '@functions/estree/isExportAllDeclaration';
import { isExportDefaultDeclaration } from '@functions/estree/isExportDefaultDeclaration';
import { isExportNamedDeclaration } from '@functions/estree/isExportNamedDeclaration';
import { isExportSpecifier } from '@functions/estree/isExportSpecifier';
import { isExpressionStatement } from '@functions/estree/isExpressionStatement';
import { isForInStatement } from '@functions/estree/isForInStatement';
import { isForOfStatement } from '@functions/estree/isForOfStatement';
import { isForStatement } from '@functions/estree/isForStatement';
import { isFunctionDeclaration } from '@functions/estree/isFunctionDeclaration';
import { isFunctionExpression } from '@functions/estree/isFunctionExpression';
import { isIdentifier } from '@functions/estree/isIdentifier';
import { isIfStatement } from '@functions/estree/isIfStatement';
import { isImportDeclaration } from '@functions/estree/isImportDeclaration';
import { isImportDefaultSpecifier } from '@functions/estree/isImportDefaultSpecifier';
import { isImportExpression } from '@functions/estree/isImportExpression';
import { isImportNamespaceSpecifier } from '@functions/estree/isImportNamespaceSpecifier';
import { isImportSpecifier } from '@functions/estree/isImportSpecifier';
import { isLabeledStatement } from '@functions/estree/isLabeledStatement';
import { isLiteral } from '@functions/estree/isLiteral';
import { isLogicalExpression } from '@functions/estree/isLogicalExpression';
import { isMemberExpression } from '@functions/estree/isMemberExpression';
import { isMetaProperty } from '@functions/estree/isMetaProperty';
import { isMethodDefinition } from '@functions/estree/isMethodDefinition';
import { isNewExpression } from '@functions/estree/isNewExpression';
import { isNode } from '@functions/estree/isNode';
import { isObjectExpression } from '@functions/estree/isObjectExpression';
import { isObjectPattern } from '@functions/estree/isObjectPattern';
import { isProgram } from '@functions/estree/isProgram';
import { isProperty } from '@functions/estree/isProperty';
import { isRestElement } from '@functions/estree/isRestElement';
import { isReturnStatement } from '@functions/estree/isReturnStatement';
import { isSequenceExpression } from '@functions/estree/isSequenceExpression';
import { isSpreadElement } from '@functions/estree/isSpreadElement';
import { isSuper } from '@functions/estree/isSuper';
import { isSwitchCase } from '@functions/estree/isSwitchCase';
import { isSwitchStatement } from '@functions/estree/isSwitchStatement';
import { isTaggedTemplateExpression } from '@functions/estree/isTaggedTemplateExpression';
import { isTemplateElement } from '@functions/estree/isTemplateElement';
import { isTemplateLiteral } from '@functions/estree/isTemplateLiteral';
import { isThisExpression } from '@functions/estree/isThisExpression';
import { isThrowStatement } from '@functions/estree/isThrowStatement';
import { isTryStatement } from '@functions/estree/isTryStatement';
import { isUnaryExpression } from '@functions/estree/isUnaryExpression';
import { isUpdateExpression } from '@functions/estree/isUpdateExpression';
import { isVariableDeclaration } from '@functions/estree/isVariableDeclaration';
import { isVariableDeclarator } from '@functions/estree/isVariableDeclarator';
import { isWhileStatement } from '@functions/estree/isWhileStatement';
import { isWithStatement } from '@functions/estree/isWithStatement';
import { isYieldExpression } from '@functions/estree/isYieldExpression';
import { Listener } from '@type/misc/Listener';

/**
 * A node passed to any listener function.
 */
export type ListenerNode<T extends Listener = Listener> =
	T extends ((node: infer U) => void | undefined)
		? U
		: never;

/**
 * Checks that an `unknown` value is a {@link ListenerNode}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of any of the ESTree types below:
 *     - `ArrayExpression`
 *     - `ArrayPattern`
 *     - `ArrowFunctionExpression`
 *     - `AssignmentExpression`
 *     - `AssignmentPattern`
 *     - `AwaitExpression`
 *     - `BinaryExpression`
 *     - `BlockStatement`
 *     - `BreakStatement`
 *     - `CallExpression`
 *     - `CatchClause`
 *     - `ChainExpression`
 *     - `ClassBody`
 *     - `ClassDeclaration`
 *     - `ClassExpression`
 *     - `ConditionalExpression`
 *     - `ContinueStatement`
 *     - `DebuggerStatement`
 *     - `DoWhileStatement`
 *     - `EmptyStatement`
 *     - `ExportAllDeclaration`
 *     - `ExportDefaultDeclaration`
 *     - `ExportNamedDeclaration`
 *     - `ExportSpecifier`
 *     - `ExpressionStatement`
 *     - `ForInStatement`
 *     - `ForOfStatement`
 *     - `ForStatement`
 *     - `FunctionDeclaration`
 *     - `FunctionExpression`
 *     - `Identifier`
 *     - `IfStatement`
 *     - `ImportDeclaration`
 *     - `ImportDefaultSpecifier`
 *     - `ImportExpression`
 *     - `ImportNamespaceSpecifier`
 *     - `ImportSpecifier`
 *     - `LabeledStatement`
 *     - `Literal`
 *     - `LogicalExpression`
 *     - `MemberExpression`
 *     - `MetaProperty`
 *     - `MethodDefinition`
 *     - `NewExpression`
 *     - `ObjectExpression`
 *     - `ObjectPattern`
 *     - `Program`
 *     - `Property`
 *     - `RestElement`
 *     - `ReturnStatement`
 *     - `SequenceExpression`
 *     - `SpreadElement`
 *     - `Super`
 *     - `SwitchCase`
 *     - `SwitchStatement`
 *     - `TaggedTemplateExpression`
 *     - `TemplateElement`
 *     - `TemplateLiteral`
 *     - `ThisExpression`
 *     - `ThrowStatement`
 *     - `TryStatement`
 *     - `UnaryExpression`
 *     - `UpdateExpression`
 *     - `VariableDeclaration`
 *     - `VariableDeclarator`
 *     - `WhileStatement`
 *     - `WithStatement`
 *     - `YieldExpression`
 *   - `value.parent` is required unless `value` is a valid `Program` and must
 *     be a valid `ListenerNode` if provided
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ListenerNode}.
 */
export const isListenerNode = <T extends Listener = Listener>(
	value: unknown,
): value is ListenerNode<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	(
		isArrayExpression(value) ||
		isArrayPattern(value) ||
		isArrowFunctionExpression(value) ||
		isAssignmentExpression(value) ||
		isAssignmentPattern(value) ||
		isAwaitExpression(value) ||
		isBinaryExpression(value) ||
		isBlockStatement(value) ||
		isBreakStatement(value) ||
		isCallExpression(value) ||
		isCatchClause(value) ||
		isChainExpression(value) ||
		isClassBody(value) ||
		isClassDeclaration(value) ||
		isClassExpression(value) ||
		isConditionalExpression(value) ||
		isContinueStatement(value) ||
		isDebuggerStatement(value) ||
		isDoWhileStatement(value) ||
		isEmptyStatement(value) ||
		isExportAllDeclaration(value) ||
		isExportDefaultDeclaration(value) ||
		isExportNamedDeclaration(value) ||
		isExportSpecifier(value) ||
		isExpressionStatement(value) ||
		isForInStatement(value) ||
		isForOfStatement(value) ||
		isForStatement(value) ||
		isFunctionDeclaration(value) ||
		isFunctionExpression(value) ||
		isIdentifier(value) ||
		isIfStatement(value) ||
		isImportDeclaration(value) ||
		isImportDefaultSpecifier(value) ||
		isImportExpression(value) ||
		isImportNamespaceSpecifier(value) ||
		isImportSpecifier(value) ||
		isLabeledStatement(value) ||
		isLiteral(value) ||
		isLogicalExpression(value) ||
		isMemberExpression(value) ||
		isMetaProperty(value) ||
		isMethodDefinition(value) ||
		isNewExpression(value) ||
		isObjectExpression(value) ||
		isObjectPattern(value) ||
		isProgram(value) ||
		isProperty(value) ||
		isRestElement(value) ||
		isReturnStatement(value) ||
		isSequenceExpression(value) ||
		isSpreadElement(value) ||
		isSuper(value) ||
		isSwitchCase(value) ||
		isSwitchStatement(value) ||
		isTaggedTemplateExpression(value) ||
		isTemplateElement(value) ||
		isTemplateLiteral(value) ||
		isThisExpression(value) ||
		isThrowStatement(value) ||
		isTryStatement(value) ||
		isUnaryExpression(value) ||
		isUpdateExpression(value) ||
		isVariableDeclaration(value) ||
		isVariableDeclarator(value) ||
		isWhileStatement(value) ||
		isWithStatement(value) ||
		isYieldExpression(value)
	) &&
	/**
	 * value.parent
	 */
	(!isProgram(value)
		? (
				'parent' in value &&
				isNode(value.parent)
			)
		: true);
