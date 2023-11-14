import type { Declaration } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeFunctionDeclaration } from './fakeFunctionDeclaration';
import { fakeVariableDeclaration } from './fakeVariableDeclaration';
import { fakeClassDeclaration } from './fakeClassDeclaration';

export const fakeDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const declaration = faker.helpers.arrayElement([
		fakeFunctionDeclaration,
		fakeVariableDeclaration,
		fakeClassDeclaration,
	])({ perf, ...overrideProps });

	return {
		...declaration,
		...overrideProps,
	} as Declaration;
};
