import type { ExportNamedDeclaration } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseModuleDeclaration } from './fakeBaseModuleDeclaration';
import { fakeExportSpecifier } from './fakeExportSpecifier';
import { fakeDeclaration } from './fakeDeclaration';
import { fakeLiteral } from './fakeLiteral';

const fakeSpecifiers = () => Array.from({
	length: faker.number.int({ min: 1, max: 3}),
}, () => faker.helpers.arrayElement([
	fakeExportSpecifier,
])());

export const fakeExportNamedDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const exportNamedDeclaration = fakeBaseModuleDeclaration({
		perf,
		type: 'ExportNamedDeclaration',
	}) as Partial<ExportNamedDeclaration>;

	if (!perf) {
		exportNamedDeclaration.specifiers = fakeSpecifiers();

		faker.helpers.maybe(() => {
			exportNamedDeclaration.declaration = faker.helpers.weightedArrayElement([
				{ weight: 5, value: fakeDeclaration() },
				{ weight: 2.5, value: undefined },
				{ weight: 2.5, value: null },
			]);
		});

		faker.helpers.maybe(() => {
			exportNamedDeclaration.source = fakeLiteral();
		});
	}

	return {
		...exportNamedDeclaration,
		...overrideProps,
	} as ExportNamedDeclaration;
};
