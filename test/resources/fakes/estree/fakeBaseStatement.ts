import type { BaseStatement } from 'estree';
import { fakeBaseNode } from './fakeBaseNode';

export const fakeBaseStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const baseStatement = fakeBaseNode({
		perf,
		...overrideProps,
	}) as Partial<BaseStatement>;

	return {
		...baseStatement,
		...overrideProps,
	} as BaseStatement;
};
