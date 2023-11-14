import type { SequenceExpression } from 'estree';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeExpressions } from './fakeExpressions';

export const fakeSequenceExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const sequenceExpression = fakeBaseExpression({
		perf,
		type: 'SequenceExpression',
		expressions: [],
	}) as Partial<SequenceExpression>;

	if (!perf) {
		sequenceExpression.expressions = fakeExpressions();
	}

	return {
		...sequenceExpression,
		...overrideProps,
	} as SequenceExpression;
};
