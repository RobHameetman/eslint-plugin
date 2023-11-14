import type { ConditionalExpression } from 'estree';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeExpression } from './fakeExpression';

export const fakeConditionalExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const conditionalExpression = fakeBaseExpression({
		perf,
		type: 'ConditionalExpression',
	}) as Partial<ConditionalExpression>;

	if (!perf) {
		conditionalExpression.alternate = fakeExpression();
		conditionalExpression.consequent = fakeExpression();
		conditionalExpression.test = fakeExpression();
	}

	return {
		...conditionalExpression,
		...overrideProps,
	} as ConditionalExpression;
};
