import type { Statement } from 'estree';
import { isBreakStatement } from '@/utils/functions/estree/isBreakStatement';
import { isBlockStatement } from '@/utils/functions/estree/isBlockStatement';
import { isContinueStatement } from '@/utils/functions/estree/isContinueStatement';
import { isDeclaration } from '@/utils/functions/estree/isDeclaration';
import { isDebuggerStatement } from '@/utils/functions/estree/isDebuggerStatement';
import { isDoWhileStatement } from '@/utils/functions/estree/isDoWhileStatement';
import { isEmptyStatement } from '@/utils/functions/estree/isEmptyStatement';
import { isExpressionStatement } from '@/utils/functions/estree/isExpressionStatement';
import { isForStatement } from '@/utils/functions/estree/isForStatement';
import { isForInStatement } from '@/utils/functions/estree/isForInStatement';
import { isForOfStatement } from '@/utils/functions/estree/isForOfStatement';
import { isIfStatement } from '@/utils/functions/estree/isIfStatement';
import { isLabeledStatement } from '@/utils/functions/estree/isLabeledStatement';
import { isReturnStatement } from '@/utils/functions/estree/isReturnStatement';
import { isStaticBlock } from '@/utils/functions/estree/isStaticBlock';
import { isSwitchStatement } from '@/utils/functions/estree/isSwitchStatement';
import { isThrowStatement } from '@/utils/functions/estree/isThrowStatement';
import { isTryStatement } from '@/utils/functions/estree/isTryStatement';
import { isWhileStatement } from '@/utils/functions/estree/isWhileStatement';
import { isWithStatement } from '@/utils/functions/estree/isWithStatement';

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
