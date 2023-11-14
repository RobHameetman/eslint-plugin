import type { ThisExpression } from 'estree';
import { fakeBaseExpression } from './fakeBaseExpression';

export const fakeThisExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const thisExpression = fakeBaseExpression({
		perf,
		type: 'ThisExpression',
	}) as Partial<ThisExpression>;

	return {
		...thisExpression,
		...overrideProps,
	} as ThisExpression;
};
