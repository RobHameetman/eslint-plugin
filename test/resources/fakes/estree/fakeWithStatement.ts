import type { WithStatement } from 'estree';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeExpression } from './fakeExpression';
import { fakeStatement } from './fakeStatement';

export const fakeWithStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const withStatement = fakeBaseStatement({
		perf,
		type: 'WithStatement',
		...overrideProps
	}) as Partial<WithStatement>;

	if (!perf) {
		withStatement.object = fakeExpression();
		withStatement.body = fakeStatement();
	}

	return {
		...withStatement,
		...overrideProps,
	} as WithStatement;
};
