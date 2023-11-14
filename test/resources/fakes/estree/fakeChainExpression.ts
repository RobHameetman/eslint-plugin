import type { ChainExpression } from 'estree';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeChainElement } from './fakeChainElement';

export const fakeChainExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const chainExpression = fakeBaseExpression({
		perf,
		type: 'ChainExpression',
	}) as Partial<ChainExpression>;

	if (!perf) {
		chainExpression.expression = fakeChainElement();
	}

	return {
		...chainExpression,
		...overrideProps,
	} as ChainExpression;
};
