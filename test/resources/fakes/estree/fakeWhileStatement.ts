import type { WhileStatement } from 'estree';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeExpression } from './fakeExpression';
import { fakeStatement } from './fakeStatement';

export const fakeWhileStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const whileStatement = fakeBaseStatement({
		perf,
		type: 'WhileStatement',
		...overrideProps
	}) as Partial<WhileStatement>;

	if (!perf) {
		whileStatement.test = fakeExpression();
		whileStatement.body = fakeStatement();
	}

	return {
		...whileStatement,
		...overrideProps,
	} as WhileStatement;
};
