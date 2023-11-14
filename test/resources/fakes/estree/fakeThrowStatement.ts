import type { ThrowStatement } from 'estree';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeExpression } from './fakeExpression';

export const fakeThrowStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const throwStatement = fakeBaseStatement({
		perf,
		type: 'ThrowStatement',
		...overrideProps
	}) as Partial<ThrowStatement>;

	if (!perf) {
		throwStatement.argument = fakeExpression();
	}

	return {
		...throwStatement,
		...overrideProps,
	} as ThrowStatement;
};
