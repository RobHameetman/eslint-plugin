import type { ModuleSpecifier } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeImportSpecifier } from './fakeImportSpecifier';
import { fakeImportDefaultSpecifier } from './fakeImportDefaultSpecifier';
import { fakeImportNamespaceSpecifier } from './fakeImportNamespaceSpecifier';
import { fakeExportSpecifier } from './fakeExportSpecifier';

export const fakeModuleSpecifier = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const moduleSpecifier = faker.helpers.arrayElement([
		fakeImportSpecifier,
		fakeImportDefaultSpecifier,
		fakeImportNamespaceSpecifier,
		fakeExportSpecifier,
	])({ perf, ...overrideProps });

	return {
		...moduleSpecifier,
		...overrideProps,
	} as ModuleSpecifier;
};
