import type { ExportDefaultDeclaration } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseModuleDeclaration } from './fakeBaseModuleDeclaration';
import { fakeExpression } from './fakeExpression';
import { fakeMaybeNamedClassDeclaration } from './fakeMaybeNamedClassDeclaration';
import { fakeMaybeNamedFunctionDeclaration } from './fakeMaybeNamedFunctionDeclaration';

export const fakeExportDefaultDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const exportDefaultDeclaration = fakeBaseModuleDeclaration({
		perf,
		type: 'ExportDefaultDeclaration',
	}) as Partial<ExportDefaultDeclaration>;

	if (!perf) {
		exportDefaultDeclaration.declaration = faker.helpers.arrayElement([
			fakeMaybeNamedFunctionDeclaration,
			fakeMaybeNamedClassDeclaration,
			fakeExpression,
		])();
	}

	return {
		...exportDefaultDeclaration,
		...overrideProps,
	} as ExportDefaultDeclaration;
};
