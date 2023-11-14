import type { NewExpression } from 'estree';
import { fakeBaseCallExpression } from './fakeBaseCallExpression';

export const fakeNewExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const newExpression = fakeBaseCallExpression({
		perf,
		type: 'NewExpression',
	}) as Partial<NewExpression>;

	return {
		...newExpression,
		...overrideProps,
	} as NewExpression;
};
