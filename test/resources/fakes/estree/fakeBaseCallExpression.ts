import type { BaseCallExpression } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeExpression } from './fakeExpression';

const fakeArguments = () => Array.from(
	{ length: faker.number.int({ min: 0, max: 5 }) },
	() => faker.helpers.arrayElement([
		fakeExpression,
	])());

export const fakeBaseCallExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const baseCallExpression = fakeBaseExpression({
		perf,
		arguments: [],
		callee: faker.helpers.arrayElement([
			fakeExpression,
		])(),
		...overrideProps,
	}) as Partial<BaseCallExpression>;

	if (!perf) {
		baseCallExpression.arguments = fakeArguments();
	}

	return {
		...baseCallExpression,
		...overrideProps,
	} as BaseCallExpression;
};
