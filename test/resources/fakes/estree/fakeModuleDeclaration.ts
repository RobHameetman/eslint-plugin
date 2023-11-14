import type { ModuleDeclaration } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeImportDeclaration } from './fakeImportDeclaration';
import { fakeExportNamedDeclaration } from './fakeExportNamedDeclaration';
import { fakeExportDefaultDeclaration } from './fakeExportDefaultDeclaration';
import { fakeExportAllDeclaration } from './fakeExportAllDeclaration';

export const fakeModuleDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const moduleDeclaration = faker.helpers.arrayElement([
		fakeImportDeclaration,
		fakeExportNamedDeclaration,
		fakeExportDefaultDeclaration,
		fakeExportAllDeclaration,
	])({ perf, ...overrideProps });

	return {
		...moduleDeclaration,
		...overrideProps,
	} as ModuleDeclaration;
};
