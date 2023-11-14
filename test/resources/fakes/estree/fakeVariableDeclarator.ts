import type { VariableDeclarator } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';
import { fakePattern } from './fakePattern';
import { fakeExpression } from './fakeExpression';

export const fakeVariableDeclarator = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const variableDeclarator = fakeBaseNode({
		perf,
		type: 'VariableDeclarator',
	}) as Partial<VariableDeclarator>;

	if (!perf) {
		variableDeclarator.id = fakePattern();

		faker.helpers.maybe(() => {
			variableDeclarator.init = faker.helpers.weightedArrayElement([
				{ weight: 5, value: fakeExpression() },
				{ weight: 2.5, value: undefined },
				{ weight: 2.5, value: null },
			]);
		})
	}

	return {
		...variableDeclarator,
		...overrideProps,
	} as VariableDeclarator;
};
