import type { ImportDefaultSpecifier } from 'estree';
import { fakeBaseModuleSpecifier } from './fakeBaseModuleSpecifier';

export const fakeImportDefaultSpecifier = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const importDefaultSpecifier = fakeBaseModuleSpecifier({
		perf,
		type: 'ImportDefaultSpecifier',
	}) as Partial<ImportDefaultSpecifier>;

	return {
		...importDefaultSpecifier,
		...overrideProps,
	} as ImportDefaultSpecifier;
};
