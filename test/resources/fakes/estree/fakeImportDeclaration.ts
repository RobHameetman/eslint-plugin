import type { ImportDeclaration } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseModuleDeclaration } from './fakeBaseModuleDeclaration';
import { fakeImportSpecifier } from './fakeImportSpecifier';
import { fakeImportDefaultSpecifier } from './fakeImportDefaultSpecifier';
import { fakeImportNamespaceSpecifier } from './fakeImportNamespaceSpecifier';
import { fakeLiteral } from './fakeLiteral';

const fakeSpecifiers = () => Array.from({
	length: faker.number.int({ min: 1, max: 3}),
}, () => faker.helpers.arrayElement([
	fakeImportSpecifier,
	fakeImportDefaultSpecifier,
	fakeImportNamespaceSpecifier,
])());

export const fakeImportDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const importDeclaration = fakeBaseModuleDeclaration({
		perf,
		type: 'ImportDeclaration',
	}) as Partial<ImportDeclaration>;

	if (!perf) {
		importDeclaration.specifiers = fakeSpecifiers();
		importDeclaration.source = fakeLiteral();
	}

	return {
		...importDeclaration,
		...overrideProps,
	} as ImportDeclaration;
};
