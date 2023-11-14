import type { EmptyStatement } from 'estree';
import { fakeBaseStatement } from './fakeBaseStatement';

export const fakeEmptyStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const emptyStatement = fakeBaseStatement({
		perf,
		type: 'EmptyStatement',
		...overrideProps
	}) as Partial<EmptyStatement>;

	return {
		...emptyStatement,
		...overrideProps,
	} as EmptyStatement;
};
