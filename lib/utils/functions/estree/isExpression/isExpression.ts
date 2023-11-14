import type { Expression } from 'estree';
import { isArrayExpression } from '@functions/estree/isArrayExpression';
import { isArrowFunctionExpression } from '@functions/estree/isArrowFunctionExpression';
import { isAwaitExpression } from '@functions/estree/isAwaitExpression';
import { isBinaryExpression } from '@functions/estree/isBinaryExpression';
import { isCallExpression } from '@functions/estree/isCallExpression';
import { isChainExpression } from '@functions/estree/isChainExpression';
import { isClassExpression } from '@functions/estree/isClassExpression';
import { isConditionalExpression } from '@functions/estree/isConditionalExpression';
import { isFunctionExpression } from '@functions/estree/isFunctionExpression';
import { isIdentifier } from '@functions/estree/isIdentifier';
import { isImportExpression } from '@functions/estree/isImportExpression';
import { isLiteral } from '@functions/estree/isLiteral';
import { isLogicalExpression } from '@functions/estree/isLogicalExpression';
import { isMemberExpression } from '@functions/estree/isMemberExpression';
import { isMetaProperty } from '@functions/estree/isMetaProperty';
import { isNewExpression } from '@functions/estree/isNewExpression';
import { isObjectExpression } from '@functions/estree/isObjectExpression';
import { isSequenceExpression } from '@functions/estree/isSequenceExpression';
import { isTaggedTemplateExpression } from '@functions/estree/isTaggedTemplateExpression';
import { isTemplateLiteral } from '@functions/estree/isTemplateLiteral';
import { isThisExpression } from '@functions/estree/isThisExpression';
import { isUnaryExpression } from '@functions/estree/isUnaryExpression';
import { isUpdateExpression } from '@functions/estree/isUpdateExpression';
import { isYieldExpression } from '@functions/estree/isYieldExpression';

/**
 * Checks that an `unknown` value is a {@link Expression}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following types:
 *     - `ArrayExpression`
 *     - `ArrowFunctionExpression`
 *     - `AwaitExpression`
 *     - `BinaryExpression`
 *     - `CallExpression`
 *     - `ChainExpression`
 *     - `ClassExpression`
 *     - `ConditionalExpression`
 *     - `FunctionExpression`
 *     - `Identifier`
 *     - `ImportExpression`
 *     - `Literal`
 *     - `LogicalExpression`
 *     - `MemberExpression`
 *     - `MetaProperty`
 *     - `NewExpression`
 *     - `ObjectExpression`
 *     - `SequenceExpression`
 *     - `TaggedTemplateExpression`
 *     - `TemplateLiteral`
 *     - `ThisExpression`
 *     - `UnaryExpression`
 *     - `UpdateExpression`
 *     - `YieldExpression`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Expression}.
 */
export const isExpression = (value: unknown): value is Expression =>
	/**
	 * value
	 */
	isArrayExpression(value) ||
	isArrowFunctionExpression(value) ||
	isAwaitExpression(value) ||
	isBinaryExpression(value) ||
	isCallExpression(value) ||
	isChainExpression(value) ||
	isClassExpression(value) ||
	isConditionalExpression(value) ||
	isFunctionExpression(value) ||
	isIdentifier(value) ||
	isImportExpression(value) ||
	isLiteral(value) ||
	isLogicalExpression(value) ||
	isMemberExpression(value) ||
	isMetaProperty(value) ||
	isNewExpression(value) ||
	isObjectExpression(value) ||
	isSequenceExpression(value) ||
	isTaggedTemplateExpression(value) ||
	isTemplateLiteral(value) ||
	isThisExpression(value) ||
	isUnaryExpression(value) ||
	isUpdateExpression(value) ||
	isYieldExpression(value);
