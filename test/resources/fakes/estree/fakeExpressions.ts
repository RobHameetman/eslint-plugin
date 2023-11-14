import { faker } from '@faker-js/faker';
import { fakeExpression } from './fakeExpression';

export const fakeExpressions = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => Array.from(
	{ length: faker.number.int({ min: 1, max: 5 }) },
	() => faker.helpers.arrayElement([
		fakeExpression,
	])({ perf, ...overrideProps }),
);
