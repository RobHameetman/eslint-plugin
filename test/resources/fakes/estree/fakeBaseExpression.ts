import type { BaseExpression } from 'estree';
import { fakeBaseNode } from './fakeBaseNode';

export const fakeBaseExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const baseExpression = fakeBaseNode({
		perf,
		...overrideProps,
	}) as Partial<BaseExpression>;

	return {
		...baseExpression,
		...overrideProps,
	} as BaseExpression;
};
