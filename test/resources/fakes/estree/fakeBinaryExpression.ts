import type { BinaryExpression } from 'estree';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeExpression } from './fakeExpression';
import { randomBinaryOperator } from '../../utils/estree/randomBinaryOperator';

export const fakeBinaryExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const binaryExpression = fakeBaseExpression({
		perf,
		type: 'BinaryExpression',
	}) as Partial<BinaryExpression>;

	if (!perf) {
		binaryExpression.operator = randomBinaryOperator();
		binaryExpression.left = fakeExpression();
		binaryExpression.right = fakeExpression();
	}

	return {
		...binaryExpression,
		...overrideProps,
	} as BinaryExpression;
};
