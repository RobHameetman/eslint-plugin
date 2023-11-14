import type { ExportSpecifier } from 'estree';
import { fakeBaseModuleSpecifier } from './fakeBaseModuleSpecifier';
import { fakeIdentifier } from './fakeIdentifier';

export const fakeExportSpecifier = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const exportSpecifier = fakeBaseModuleSpecifier({
		perf,
		type: 'ExportSpecifier',
	}) as Partial<ExportSpecifier>;

	if (!perf) {
		exportSpecifier.exported = fakeIdentifier();
	}

	return {
		...exportSpecifier,
		...overrideProps,
	} as ExportSpecifier;
};
