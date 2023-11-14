import type { AwaitExpression } from 'estree';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeExpression } from './fakeExpression';

export const fakeAwaitExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const awaitExpression = fakeBaseExpression({
		perf,
		type: 'AwaitExpression',
	}) as Partial<AwaitExpression>;

	if (!perf) {
		awaitExpression.argument = fakeExpression();
	}

	return {
		...awaitExpression,
		...overrideProps,
	} as AwaitExpression;
};
