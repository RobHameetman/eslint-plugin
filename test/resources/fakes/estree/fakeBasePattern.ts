import type { BasePattern } from 'estree';
import { fakeBaseNode } from './fakeBaseNode';

export const fakeBasePattern = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const basePattern = fakeBaseNode({
		perf,
		...overrideProps
	}) as Partial<BasePattern>;

	return {
		...basePattern,
		...overrideProps,
	} as BasePattern;
};
