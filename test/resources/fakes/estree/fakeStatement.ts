import type { Statement } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeExpressionStatement } from './fakeExpressionStatement';
import { fakeBlockStatement } from './fakeBlockStatement';
import { fakeStaticBlock } from './fakeStaticBlock';
import { fakeEmptyStatement } from './fakeEmptyStatement';
import { fakeDebuggerStatement } from './fakeDebuggerStatement';
import { fakeWithStatement } from './fakeWithStatement';
import { fakeReturnStatement } from './fakeReturnStatement';
import { fakeLabeledStatement } from './fakeLabeledStatement';
import { fakeBreakStatement } from './fakeBreakStatement';
import { fakeContinueStatement } from './fakeContinueStatement';
import { fakeIfStatement } from './fakeIfStatement';
import { fakeSwitchStatement } from './fakeSwitchStatement';
import { fakeThrowStatement } from './fakeThrowStatement';
import { fakeTryStatement } from './fakeTryStatement';
import { fakeWhileStatement } from './fakeWhileStatement';
import { fakeDoWhileStatement } from './fakeDoWhileStatement';
import { fakeForStatement } from './fakeForStatement';
import { fakeForInStatement } from './fakeForInStatement';
import { fakeForOfStatement } from './fakeForOfStatement';
import { fakeDeclaration } from './fakeDeclaration';

export const fakeStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const statement = faker.helpers.arrayElement([
		fakeExpressionStatement,
		fakeBlockStatement,
		fakeStaticBlock,
		fakeEmptyStatement,
		fakeDebuggerStatement,
		fakeWithStatement,
		fakeReturnStatement,
		fakeLabeledStatement,
		fakeBreakStatement,
		fakeContinueStatement,
		fakeIfStatement,
		fakeSwitchStatement,
		fakeThrowStatement,
		fakeTryStatement,
		fakeWhileStatement,
		fakeDoWhileStatement,
		fakeForStatement,
		fakeForInStatement,
		fakeForOfStatement,
		fakeDeclaration,
	])({ perf, ...overrideProps });

	return {
		...statement,
		...overrideProps,
	} as Statement;
};
