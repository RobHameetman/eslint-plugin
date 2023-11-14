import type { ImportNamespaceSpecifier } from 'estree';
import { fakeBaseModuleSpecifier } from './fakeBaseModuleSpecifier';

export const fakeImportNamespaceSpecifier = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const importNamespaceSpecifier = fakeBaseModuleSpecifier({
		perf,
		type: 'ImportNamespaceSpecifier',
	}) as Partial<ImportNamespaceSpecifier>;

	return {
		...importNamespaceSpecifier,
		...overrideProps,
	} as ImportNamespaceSpecifier;
};
