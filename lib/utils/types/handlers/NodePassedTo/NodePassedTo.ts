import { isObject } from '@rob.hameetman/type-guards';
import { isArrayExpression } from '@/utils/functions/estree/isArrayExpression';
import { isArrayPattern } from '@/utils/functions/estree/isArrayPattern';
import { isArrowFunctionExpression } from '@/utils/functions/estree/isArrowFunctionExpression';
import { isAssignmentExpression } from '@/utils/functions/estree/isAssignmentExpression';
import { isAssignmentPattern } from '@/utils/functions/estree/isAssignmentPattern';
import { isAwaitExpression } from '@/utils/functions/estree/isAwaitExpression';
import { isBinaryExpression } from '@/utils/functions/estree/isBinaryExpression';
import { isBlockStatement } from '@/utils/functions/estree/isBlockStatement';
import { isBreakStatement } from '@/utils/functions/estree/isBreakStatement';
import { isCallExpression } from '@/utils/functions/estree/isCallExpression';
import { isCatchClause } from '@/utils/functions/estree/isCatchClause';
import { isChainExpression } from '@/utils/functions/estree/isChainExpression';
import { isClassBody } from '@/utils/functions/estree/isClassBody';
import { isClassDeclaration } from '@/utils/functions/estree/isClassDeclaration';
import { isClassExpression } from '@/utils/functions/estree/isClassExpression';
import { isConditionalExpression } from '@/utils/functions/estree/isConditionalExpression';
import { isContinueStatement } from '@/utils/functions/estree/isContinueStatement';
import { isDebuggerStatement } from '@/utils/functions/estree/isDebuggerStatement';
import { isDoWhileStatement } from '@/utils/functions/estree/isDoWhileStatement';
import { isEmptyStatement } from '@/utils/functions/estree/isEmptyStatement';
import { isExportAllDeclaration } from '@/utils/functions/estree/isExportAllDeclaration';
import { isExportDefaultDeclaration } from '@/utils/functions/estree/isExportDefaultDeclaration';
import { isExportNamedDeclaration } from '@/utils/functions/estree/isExportNamedDeclaration';
import { isExportSpecifier } from '@/utils/functions/estree/isExportSpecifier';
import { isExpressionStatement } from '@/utils/functions/estree/isExpressionStatement';
import { isForInStatement } from '@/utils/functions/estree/isForInStatement';
import { isForOfStatement } from '@/utils/functions/estree/isForOfStatement';
import { isForStatement } from '@/utils/functions/estree/isForStatement';
import { isFunctionDeclaration } from '@/utils/functions/estree/isFunctionDeclaration';
import { isFunctionExpression } from '@/utils/functions/estree/isFunctionExpression';
import { isIdentifier } from '@/utils/functions/estree/isIdentifier';
import { isIfStatement } from '@/utils/functions/estree/isIfStatement';
import { isImportDeclaration } from '@/utils/functions/estree/isImportDeclaration';
import { isImportDefaultSpecifier } from '@/utils/functions/estree/isImportDefaultSpecifier';
import { isImportExpression } from '@/utils/functions/estree/isImportExpression';
import { isImportNamespaceSpecifier } from '@/utils/functions/estree/isImportNamespaceSpecifier';
import { isImportSpecifier } from '@/utils/functions/estree/isImportSpecifier';
import { isLabeledStatement } from '@/utils/functions/estree/isLabeledStatement';
import { isLiteral } from '@/utils/functions/estree/isLiteral';
import { isLogicalExpression } from '@/utils/functions/estree/isLogicalExpression';
import { isMemberExpression } from '@/utils/functions/estree/isMemberExpression';
import { isMetaProperty } from '@/utils/functions/estree/isMetaProperty';
import { isMethodDefinition } from '@/utils/functions/estree/isMethodDefinition';
import { isNewExpression } from '@/utils/functions/estree/isNewExpression';
import { isNode } from '@/utils/functions/estree/isNode';
import { isObjectExpression } from '@/utils/functions/estree/isObjectExpression';
import { isObjectPattern } from '@/utils/functions/estree/isObjectPattern';
import { isProgram } from '@/utils/functions/estree/isProgram';
import { isProperty } from '@/utils/functions/estree/isProperty';
import { isRestElement } from '@/utils/functions/estree/isRestElement';
import { isReturnStatement } from '@/utils/functions/estree/isReturnStatement';
import { isSequenceExpression } from '@/utils/functions/estree/isSequenceExpression';
import { isSpreadElement } from '@/utils/functions/estree/isSpreadElement';
import { isSuper } from '@/utils/functions/estree/isSuper';
import { isSwitchCase } from '@/utils/functions/estree/isSwitchCase';
import { isSwitchStatement } from '@/utils/functions/estree/isSwitchStatement';
import { isTaggedTemplateExpression } from '@/utils/functions/estree/isTaggedTemplateExpression';
import { isTemplateElement } from '@/utils/functions/estree/isTemplateElement';
import { isTemplateLiteral } from '@/utils/functions/estree/isTemplateLiteral';
import { isThisExpression } from '@/utils/functions/estree/isThisExpression';
import { isThrowStatement } from '@/utils/functions/estree/isThrowStatement';
import { isTryStatement } from '@/utils/functions/estree/isTryStatement';
import { isUnaryExpression } from '@/utils/functions/estree/isUnaryExpression';
import { isUpdateExpression } from '@/utils/functions/estree/isUpdateExpression';
import { isVariableDeclaration } from '@/utils/functions/estree/isVariableDeclaration';
import { isVariableDeclarator } from '@/utils/functions/estree/isVariableDeclarator';
import { isWhileStatement } from '@/utils/functions/estree/isWhileStatement';
import { isWithStatement } from '@/utils/functions/estree/isWithStatement';
import { isYieldExpression } from '@/utils/functions/estree/isYieldExpression';
import { Handler } from '@/utils/types/handlers/Handler';

/**
 * A node passed to any handler function.
 */
// export type NodePassedTo<T extends Handler = Handler> = Parameters<T>;
export type NodePassedTo<T extends Handler = Handler> =
	T extends ((node: infer U) => void | undefined)
		? U
		: never;

/**
 * Checks that an `unknown` value is a {@link NodePassedTo}.
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
 *     be a valid `NodePassedTo` if provided
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link NodePassedTo}.
 */
export const isNodePassedTo = <T extends Handler = Handler>(
	value: unknown,
): value is NodePassedTo<T> =>
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
