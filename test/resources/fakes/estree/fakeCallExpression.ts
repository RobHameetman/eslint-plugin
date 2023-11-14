import type { CallExpression } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeSimpleCallExpression } from './fakeSimpleCallExpression';
import { fakeNewExpression } from './fakeNewExpression';

export const fakeCallExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const callExpression = faker.helpers.arrayElement([
		fakeSimpleCallExpression,
		fakeNewExpression,
	])({ perf, ...overrideProps });

	return {
		...callExpression,
		...overrideProps,
	} as CallExpression;
};
