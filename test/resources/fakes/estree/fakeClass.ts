import type { Class } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeClassDeclaration } from './fakeClassDeclaration';
import { fakeClassExpression } from './fakeClassExpression';

export const fakeClass = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const cls = faker.helpers.arrayElement([
		fakeClassDeclaration,
		fakeClassExpression,
	])({ perf, ...overrideProps });

	return {
		...cls,
		...overrideProps,
	} as Class;
};
