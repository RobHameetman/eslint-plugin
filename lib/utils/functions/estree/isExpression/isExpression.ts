import type { Expression } from 'estree';
import { isArrayExpression } from '@/utils/functions/estree/isArrayExpression';
import { isArrowFunctionExpression } from '@/utils/functions/estree/isArrowFunctionExpression';
import { isAwaitExpression } from '@/utils/functions/estree/isAwaitExpression';
import { isBinaryExpression } from '@/utils/functions/estree/isBinaryExpression';
import { isCallExpression } from '@/utils/functions/estree/isCallExpression';
import { isChainExpression } from '@/utils/functions/estree/isChainExpression';
import { isClassExpression } from '@/utils/functions/estree/isClassExpression';
import { isConditionalExpression } from '@/utils/functions/estree/isConditionalExpression';
import { isFunctionExpression } from '@/utils/functions/estree/isFunctionExpression';
import { isIdentifier } from '@/utils/functions/estree/isIdentifier';
import { isImportExpression } from '@/utils/functions/estree/isImportExpression';
import { isLiteral } from '@/utils/functions/estree/isLiteral';
import { isLogicalExpression } from '@/utils/functions/estree/isLogicalExpression';
import { isMemberExpression } from '@/utils/functions/estree/isMemberExpression';
import { isMetaProperty } from '@/utils/functions/estree/isMetaProperty';
import { isNewExpression } from '@/utils/functions/estree/isNewExpression';
import { isObjectExpression } from '@/utils/functions/estree/isObjectExpression';
import { isSequenceExpression } from '@/utils/functions/estree/isSequenceExpression';
import { isTaggedTemplateExpression } from '@/utils/functions/estree/isTaggedTemplateExpression';
import { isTemplateLiteral } from '@/utils/functions/estree/isTemplateLiteral';
import { isThisExpression } from '@/utils/functions/estree/isThisExpression';
import { isUnaryExpression } from '@/utils/functions/estree/isUnaryExpression';
import { isUpdateExpression } from '@/utils/functions/estree/isUpdateExpression';
import { isYieldExpression } from '@/utils/functions/estree/isYieldExpression';

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
