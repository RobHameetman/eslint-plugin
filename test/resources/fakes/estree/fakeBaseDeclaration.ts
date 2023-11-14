import type { BaseDeclaration } from 'estree';
import { fakeBaseStatement } from './fakeBaseStatement';

export const fakeBaseDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const baseDeclaration = fakeBaseStatement({
		perf,
		...overrideProps,
	}) as Partial<BaseDeclaration>;

	return {
		...baseDeclaration,
		...overrideProps,
	} as BaseDeclaration;
};
