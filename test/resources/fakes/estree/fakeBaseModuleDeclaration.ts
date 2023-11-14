import type { BaseModuleDeclaration } from 'estree';
import { fakeBaseNode } from './fakeBaseNode';

export const fakeBaseModuleDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const baseModuleDeclaration = fakeBaseNode({
		perf,
		...overrideProps,
	}) as Partial<BaseModuleDeclaration>;

	return {
		...baseModuleDeclaration,
		...overrideProps,
	} as BaseModuleDeclaration;
};
