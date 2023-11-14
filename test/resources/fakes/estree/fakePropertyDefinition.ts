import type { PropertyDefinition } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeExpression } from './fakeExpression';
import { fakePrivateIdentifier } from './fakePrivateIdentifier';

export const fakePropertyDefinition = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const propertyDefinition = fakeBaseNode({
		perf,
		type: 'PropertyDefinition',
	}) as Partial<PropertyDefinition>;

	if (!perf) {
		propertyDefinition.key = faker.helpers.arrayElement([
			fakeExpression,
			fakePrivateIdentifier,
		])();

		faker.helpers.maybe(() => {
			propertyDefinition.value =
				faker.datatype.boolean()
					? fakeExpression()
					: faker.helpers.arrayElement([null, undefined]);
		});

		propertyDefinition.computed = faker.datatype.boolean();
		propertyDefinition.static = faker.datatype.boolean();
	}

	return {
		...propertyDefinition,
		...overrideProps,
	} as PropertyDefinition;
};
