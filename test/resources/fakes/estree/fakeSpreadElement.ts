import type { SpreadElement } from 'estree';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeExpression } from './fakeExpression';

export const fakeSpreadElement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const spreadElement = fakeBaseNode({
		perf,
		type: 'SpreadElement',
	}) as Partial<SpreadElement>;

	if (!perf) {
		spreadElement.argument = fakeExpression();
	}

	return {
		...spreadElement,
		...overrideProps,
	} as SpreadElement;
};
