import type { Expression } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeArrayExpression } from './fakeArrayExpression';
import { fakeArrowFunctionExpression } from './fakeArrowFunctionExpression';
import { fakeAwaitExpression } from './fakeAwaitExpression';
import { fakeBinaryExpression } from './fakeBinaryExpression';
import { fakeCallExpression } from './fakeCallExpression';
import { fakeChainExpression } from './fakeChainExpression';
import { fakeClassExpression } from './fakeClassExpression';
import { fakeConditionalExpression } from './fakeConditionalExpression';
import { fakeFunctionExpression } from './fakeFunctionExpression';
import { fakeIdentifier } from './fakeIdentifier';
import { fakeImportExpression } from './fakeImportExpression';
import { fakeLiteral } from './fakeLiteral';
import { fakeLogicalExpression } from './fakeLogicalExpression';
import { fakeMemberExpression } from './fakeMemberExpression';
import { fakeMetaProperty } from './fakeMetaProperty';
import { fakeNewExpression } from './fakeNewExpression';
import { fakeObjectExpression } from './fakeObjectExpression';
import { fakeSequenceExpression } from './fakeSequenceExpression';
import { fakeTaggedTemplateExpression } from './fakeTaggedTemplateExpression';
import { fakeTemplateLiteral } from './fakeTemplateLiteral';
import { fakeThisExpression } from './fakeThisExpression';
import { fakeUnaryExpression } from './fakeUnaryExpression';
import { fakeUpdateExpression } from './fakeUpdateExpression';
import { fakeYieldExpression } from './fakeYieldExpression';

export const fakeExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const expression = faker.helpers.arrayElement([
		fakeArrayExpression,
		fakeArrowFunctionExpression,
		fakeAwaitExpression,
		fakeBinaryExpression,
		fakeCallExpression,
		fakeChainExpression,
		fakeClassExpression,
		fakeConditionalExpression,
		fakeFunctionExpression,
		fakeIdentifier,
		fakeImportExpression,
		fakeLiteral,
		fakeLogicalExpression,
		fakeMemberExpression,
		fakeMetaProperty,
		fakeNewExpression,
		fakeObjectExpression,
		fakeSequenceExpression,
		fakeTaggedTemplateExpression,
		fakeTemplateLiteral,
		fakeThisExpression,
		fakeUnaryExpression,
		fakeUpdateExpression,
		fakeYieldExpression,
	])({ perf, ...overrideProps });

	return {
		...expression,
		...overrideProps,
	} as Expression;
};
