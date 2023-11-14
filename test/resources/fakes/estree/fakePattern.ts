import type { Pattern } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeArrayPattern } from './fakeArrayPattern';
import { fakeAssignmentPattern } from './fakeAssignmentPattern';
import { fakeIdentifier } from './fakeIdentifier';
import { fakeMemberExpression } from './fakeMemberExpression';
import { fakeObjectPattern } from './fakeObjectPattern';
import { fakeRestElement } from './fakeRestElement';

export const fakePattern = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const pattern = faker.helpers.arrayElement([
		fakeIdentifier,
		fakeObjectPattern,
		fakeArrayPattern,
		fakeRestElement,
		fakeAssignmentPattern,
		fakeMemberExpression,
	])({ perf, ...overrideProps });

	return {
		...pattern,
		...overrideProps,
	} as Pattern;
};
