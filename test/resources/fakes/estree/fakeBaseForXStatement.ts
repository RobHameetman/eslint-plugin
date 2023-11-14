import type { BaseForXStatement } from 'estree';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeExpression } from './fakeExpression';
import { fakePattern } from './fakePattern';
import { fakeStatement } from './fakeStatement';

export const fakeBaseForXStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const baseForXStatement = fakeBaseStatement({
		perf,
		body: fakeStatement(),
		left: fakePattern(),
		right: fakeExpression(),
		...overrideProps
	}) as Partial<BaseForXStatement>;

	return {
		...baseForXStatement,
		...overrideProps,
	} as BaseForXStatement;
};
