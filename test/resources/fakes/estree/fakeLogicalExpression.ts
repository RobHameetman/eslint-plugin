import type { LogicalExpression } from 'estree';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeExpression } from './fakeExpression';
import { randomLogicalOperator } from '../../utils/estree/randomLogicalOperator';

export const fakeLogicalExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const logicalExpression = fakeBaseExpression({
		perf,
		type: 'LogicalExpression',
	}) as Partial<LogicalExpression>;

	if (!perf) {
		logicalExpression.operator = randomLogicalOperator();
		logicalExpression.left = fakeExpression();
		logicalExpression.right = fakeExpression();
	}

	return {
		...logicalExpression,
		...overrideProps,
	} as LogicalExpression;
};
