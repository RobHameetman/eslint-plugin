import type { BaseModuleSpecifier } from 'estree';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeIdentifier } from './fakeIdentifier';

export const fakeBaseModuleSpecifier = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const baseModuleSpecifier = fakeBaseNode({
		perf,
		local: fakeIdentifier(),
		...overrideProps,
	}) as Partial<BaseModuleSpecifier>;

	return {
		...baseModuleSpecifier,
		...overrideProps,
	} as BaseModuleSpecifier;
};
