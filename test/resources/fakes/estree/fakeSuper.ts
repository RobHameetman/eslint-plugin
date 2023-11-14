import type { Super } from 'estree';
import { fakeBaseNode } from './fakeBaseNode';

export const fakeSuper = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const sup = fakeBaseNode({
		perf,
		type: 'Super',
		...overrideProps
	}) as Partial<Super>;

	return {
		...sup,
		...overrideProps,
	} as Super;
};
