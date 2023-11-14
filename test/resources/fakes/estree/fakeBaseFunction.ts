import type { BaseFunction } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeBlockStatement } from './fakeBlockStatement';
import { fakeExpression } from './fakeExpression';
import { fakePatterns } from './fakePatterns';

export const fakeBaseFunction = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const baseFunction = fakeBaseNode({
		perf,
		body: faker.helpers.arrayElement([
			fakeBlockStatement,
			fakeExpression,
		])(),
		params: fakePatterns(),
		...overrideProps,
	}) as Partial<BaseFunction>;

	if (!perf) {
		faker.helpers.maybe(() => {
			baseFunction.async = faker.helpers.arrayElement([
				faker.datatype.boolean(),
				undefined,
			]);
		});

		faker.helpers.maybe(() => {
			baseFunction.generator = faker.helpers.arrayElement([
				faker.datatype.boolean(),
				undefined,
			]);
		});
	}

	return {
		...baseFunction,
		...overrideProps,
	} as BaseFunction;
};
