import type { ObjectPattern } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeAssignmentProperty } from './fakeAssignmentProperty';
import { fakeBasePattern } from './fakeBasePattern';
import { fakeRestElement } from './fakeRestElement';

const fakeProperties = () => Array.from({
	length: faker.number.int({ min: 1, max: 3 }),
}, () => faker.helpers.arrayElement([
	fakeAssignmentProperty,
	fakeRestElement,
])());

export const fakeObjectPattern = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const objectPattern = fakeBasePattern({
		perf,
		type: 'ObjectPattern',
	}) as Partial<ObjectPattern>;

	if (!perf) {
		objectPattern.properties = fakeProperties();
	}

	return {
		...objectPattern,
		...overrideProps,
	} as ObjectPattern;
};
