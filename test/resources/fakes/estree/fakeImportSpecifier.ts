import type { ImportSpecifier } from 'estree';
import { fakeBaseModuleSpecifier } from './fakeBaseModuleSpecifier';
import { fakeIdentifier } from './fakeIdentifier';

export const fakeImportSpecifier = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const importSpecifier = fakeBaseModuleSpecifier({
		perf,
		type: 'ImportSpecifier',
	}) as Partial<ImportSpecifier>;

	if (!perf) {
		importSpecifier.imported = fakeIdentifier();
	}

	return {
		...importSpecifier,
		...overrideProps,
	} as ImportSpecifier;
};
