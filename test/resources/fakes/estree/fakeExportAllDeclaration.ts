import type { ExportAllDeclaration } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseModuleDeclaration } from './fakeBaseModuleDeclaration';
import { fakeIdentifier } from './fakeIdentifier';
import { fakeLiteral } from './fakeLiteral';

export const fakeExportAllDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const exportAllDeclaration = fakeBaseModuleDeclaration({
		perf,
		type: 'ExportAllDeclaration',
	}) as Partial<ExportAllDeclaration>;

	if (!perf) {
		exportAllDeclaration.exported = faker.helpers.arrayElement([
			fakeIdentifier(),
			null,
		]);

		exportAllDeclaration.source = fakeLiteral();
	}

	return {
		...exportAllDeclaration,
		...overrideProps,
	} as ExportAllDeclaration;
};
