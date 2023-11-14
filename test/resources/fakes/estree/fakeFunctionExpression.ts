import type { FunctionExpression } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeBaseFunction } from './fakeBaseFunction';
import { fakeBlockStatement } from './fakeBlockStatement';
import { fakeExpression } from './fakeExpression';
import { fakeIdentifier } from './fakeIdentifier';

export const fakeFunctionExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const functionExpression = fakeBaseFunction({
		...fakeBaseExpression({
			perf,
			type: 'FunctionExpression',
			expression: faker.datatype.boolean(),
		}),
	}) as Partial<FunctionExpression>;

	if (!perf) {
		functionExpression.id = faker.helpers.arrayElement([
			fakeIdentifier(),
			undefined,
			null,
		]);

		functionExpression.body = fakeBlockStatement();
	}

	return {
		...functionExpression,
		...overrideProps,
	} as FunctionExpression;
};
