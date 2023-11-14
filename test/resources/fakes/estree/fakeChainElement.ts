import type { ChainElement } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeSimpleCallExpression } from './fakeSimpleCallExpression';
import { fakeMemberExpression } from './fakeMemberExpression';

export const fakeChainElement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const chainElement = faker.helpers.arrayElement([
		fakeSimpleCallExpression,
		fakeMemberExpression,
	])({ perf, ...overrideProps });

	return {
		...chainElement,
		...overrideProps,
	} as ChainElement;
};
