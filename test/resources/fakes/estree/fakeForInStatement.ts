import type { ForInStatement } from 'estree';
import { fakeBaseForXStatement } from './fakeBaseForXStatement';

export const fakeForInStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const forInStatement = fakeBaseForXStatement({
		perf,
		type: 'ForInStatement',
		...overrideProps
	}) as Partial<ForInStatement>;

	return {
		...forInStatement,
		...overrideProps,
	} as ForInStatement;
};
