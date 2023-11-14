import type { UnaryExpression } from 'estree';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeExpression } from './fakeExpression';
import { randomUnaryOperator } from '../../utils/estree/randomUnaryOperator';

export const fakeUnaryExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const unaryExpression = fakeBaseExpression({
		perf,
		type: 'UnaryExpression',
		prefix: true,
	}) as Partial<UnaryExpression>;

	if (!perf) {
		unaryExpression.argument = fakeExpression();
		unaryExpression.operator = randomUnaryOperator();
	}

	return {
		...unaryExpression,
		...overrideProps,
	} as UnaryExpression;
};
