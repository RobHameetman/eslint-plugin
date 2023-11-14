import type { SimpleCallExpression } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseCallExpression } from './fakeBaseCallExpression';

export const fakeSimpleCallExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const simpleCallExpression = fakeBaseCallExpression({
		perf,
		type: 'CallExpression',
	}) as Partial<SimpleCallExpression>;

	if (!perf) {
		simpleCallExpression.optional = faker.datatype.boolean();
	}

	return {
		...simpleCallExpression,
		...overrideProps,
	} as SimpleCallExpression;
};
