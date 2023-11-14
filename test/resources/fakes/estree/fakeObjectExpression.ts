import type { ObjectExpression } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeProperty } from './fakeProperty';
import { fakeSpreadElement } from './fakeSpreadElement';

const fakeProperties = () => Array.from(
	{ length: faker.number.int({ min: 1, max: 5 }) },
	() => faker.helpers.arrayElement([
		fakeProperty,
		fakeSpreadElement,
	])(),
);

export const fakeObjectExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const objectExpression = fakeBaseExpression({
		perf,
		type: 'ObjectExpression',
	}) as Partial<ObjectExpression>;

	if (!perf) {
		objectExpression.properties = fakeProperties();
	}

	return {
		...objectExpression,
		...overrideProps,
	} as ObjectExpression;
};
