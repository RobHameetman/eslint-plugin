import type { ExpressionStatement } from 'estree';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeExpression } from './fakeExpression';

export const fakeExpressionStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const expressionStatement = fakeBaseStatement({
		perf,
		type: 'ExpressionStatement',
		...overrideProps
	}) as Partial<ExpressionStatement>;

	if (!perf) {
		expressionStatement.expression = fakeExpression();
	}

	return {
		...expressionStatement,
		...overrideProps,
	} as ExpressionStatement;
};
