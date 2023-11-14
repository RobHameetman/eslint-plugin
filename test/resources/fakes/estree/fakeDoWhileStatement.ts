import type { DoWhileStatement } from 'estree';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeExpression } from './fakeExpression';
import { fakeStatement } from './fakeStatement';

export const fakeDoWhileStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const doWhileStatement = fakeBaseStatement({
		perf,
		type: 'DoWhileStatement',
		...overrideProps
	}) as Partial<DoWhileStatement>;

	if (!perf) {
		doWhileStatement.test = fakeExpression();
		doWhileStatement.body = fakeStatement();
	}

	return {
		...doWhileStatement,
		...overrideProps,
	} as DoWhileStatement;
};
