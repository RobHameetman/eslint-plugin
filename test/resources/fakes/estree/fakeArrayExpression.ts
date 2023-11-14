import type { ArrayExpression } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeExpression } from './fakeExpression';
import { fakeSpreadElement } from './fakeSpreadElement';

const fakeElements = () => Array.from(
	{ length: faker.number.int({ min: 1, max: 5 }) },
	() => faker.datatype.boolean() ? faker.helpers.arrayElement([
		fakeExpression,
		fakeSpreadElement,
	])() : null,
);

export const fakeArrayExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const arrayExpression = fakeBaseExpression({
		perf,
		type: 'ArrayExpression',
	}) as Partial<ArrayExpression>;

	if (!perf) {
		arrayExpression.elements = fakeElements();
	}

	return {
		...arrayExpression,
		...overrideProps,
	} as ArrayExpression;
};
