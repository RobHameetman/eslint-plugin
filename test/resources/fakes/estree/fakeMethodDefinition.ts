import type { MethodDefinition } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeFunctionExpression } from './fakeFunctionExpression';
import { fakeExpression } from './fakeExpression';
import { fakePrivateIdentifier } from './fakePrivateIdentifier';

export const fakeMethodDefinition = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const methodDefinition = fakeBaseNode({
		perf,
		type: 'MethodDefinition',
	}) as Partial<MethodDefinition>;

	if (!perf) {
		methodDefinition.key = faker.helpers.arrayElement([
			fakeExpression,
			fakePrivateIdentifier,
		])();

		methodDefinition.value = fakeFunctionExpression();

		methodDefinition.kind = faker.helpers.arrayElement([
			'constructor',
			'method',
			'get',
			'set',
		]);

		methodDefinition.computed = faker.datatype.boolean();
		methodDefinition.static = faker.datatype.boolean();
	}

	return {
		...methodDefinition,
		...overrideProps,
	} as MethodDefinition;
};
