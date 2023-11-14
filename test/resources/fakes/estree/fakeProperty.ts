import type { Property } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeExpression } from './fakeExpression';

export const fakeProperty = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const property = fakeBaseNode({
		perf,
		type: 'Property',
	}) as Partial<Property>;

	if (!perf) {
		property.key = fakeExpression();
		property.value = fakeExpression();
		property.kind = faker.helpers.arrayElement(['init', 'get', 'set']);
		property.method = faker.datatype.boolean();
		property.shorthand = faker.datatype.boolean();
		property.computed = faker.datatype.boolean();
	}

	return {
		...property,
		...overrideProps,
	} as Property;
};
