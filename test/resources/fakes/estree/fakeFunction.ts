import type { Function } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeFunctionDeclaration } from './fakeFunctionDeclaration';
import { fakeFunctionExpression } from './fakeFunctionExpression';
import { fakeArrowFunctionExpression } from './fakeArrowFunctionExpression';

export const fakeFunction = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const func = faker.helpers.arrayElement([
		fakeFunctionDeclaration,
		fakeFunctionExpression,
		fakeArrowFunctionExpression,
	])({ perf, ...overrideProps });

	return {
		...func,
		...overrideProps,
	} as Function;
};
