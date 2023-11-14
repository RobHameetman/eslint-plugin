import type { VariableDeclaration } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseDeclaration } from './fakeBaseDeclaration';
import { fakeVariableDeclarator } from './fakeVariableDeclarator';

const fakeDeclarations = () => Array.from(
	{ length: faker.number.int({ min: 1, max: 3 }) },
	fakeVariableDeclarator,
);

export const fakeVariableDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const variableDeclaration = fakeBaseDeclaration({
		perf,
		type: 'VariableDeclaration',
	}) as Partial<VariableDeclaration>;

	if (!perf) {
		variableDeclaration.declarations = fakeDeclarations();

		variableDeclaration.kind = faker.helpers.arrayElement([
			'var',
			'let',
			'const',
		]);
	}

	return {
		...variableDeclaration,
		...overrideProps,
	} as VariableDeclaration;
};
