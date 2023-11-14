import type { ArrayPattern } from 'estree';
import { fakeBasePattern } from './fakeBasePattern';
import { fakePattern } from './fakePattern';

export const fakeArrayPattern = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const arrayPattern = fakeBasePattern({
		perf,
		type: 'ArrayPattern',
		elements: [perf ? null : fakePattern()],
	}) as Partial<ArrayPattern>;

	return {
		...arrayPattern,
		...overrideProps,
	} as ArrayPattern;
};
