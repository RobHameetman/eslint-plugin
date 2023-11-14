import type { Statement } from 'estree';
import { isBreakStatement } from '@functions/estree/isBreakStatement';
import { isBlockStatement } from '@functions/estree/isBlockStatement';
import { isContinueStatement } from '@functions/estree/isContinueStatement';
import { isDeclaration } from '@functions/estree/isDeclaration';
import { isDebuggerStatement } from '@functions/estree/isDebuggerStatement';
import { isDoWhileStatement } from '@functions/estree/isDoWhileStatement';
import { isEmptyStatement } from '@functions/estree/isEmptyStatement';
import { isExpressionStatement } from '@functions/estree/isExpressionStatement';
import { isForStatement } from '@functions/estree/isForStatement';
import { isForInStatement } from '@functions/estree/isForInStatement';
import { isForOfStatement } from '@functions/estree/isForOfStatement';
import { isIfStatement } from '@functions/estree/isIfStatement';
import { isLabeledStatement } from '@functions/estree/isLabeledStatement';
import { isReturnStatement } from '@functions/estree/isReturnStatement';
import { isStaticBlock } from '@functions/estree/isStaticBlock';
import { isSwitchStatement } from '@functions/estree/isSwitchStatement';
import { isThrowStatement } from '@functions/estree/isThrowStatement';
import { isTryStatement } from '@functions/estree/isTryStatement';
import { isWhileStatement } from '@functions/estree/isWhileStatement';
import { isWithStatement } from '@functions/estree/isWithStatement';

/**
 * Checks that an `unknown` value is a {@link Statement}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following types:
 *     - `BreakStatement`
 *     - `BlockStatement`
 *     - `ContinueStatement`
 *     - `Declaration`
 *     - `DebuggerStatement`
 *     - `DoWhileStatement`
 *     - `EmptyStatement`
 *     - `ExpressionStatement`
 *     - `ForStatement`
 *     - `ForInStatement`
 *     - `ForOfStatement`
 *     - `IfStatement`
 *     - `LabeledStatement`
 *     - `ReturnStatement`
 *     - `StaticBlock`
 *     - `SwitchStatement`
 *     - `ThrowStatement`
 *     - `TryStatement`
 *     - `WhileStatement`
 *     - `WithStatement`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Statement}.
 */
export const isStatement = (value: unknown): value is Statement =>
	/**
	 * value
	 */
	isBlockStatement(value) ||
	isBreakStatement(value) ||
	isContinueStatement(value) ||
	isDeclaration(value) ||
	isDebuggerStatement(value) ||
	isDoWhileStatement(value) ||
	isEmptyStatement(value) ||
	isExpressionStatement(value) ||
	isForStatement(value) ||
	isForInStatement(value) ||
	isForOfStatement(value) ||
	isIfStatement(value) ||
	isLabeledStatement(value) ||
	isReturnStatement(value) ||
	isStaticBlock(value) ||
	isSwitchStatement(value) ||
	isThrowStatement(value) ||
	isTryStatement(value) ||
	isWhileStatement(value) ||
	isWithStatement(value);
