import type { ArrowFunctionExpression } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeBlockStatement } from './fakeBlockStatement';
import { fakeExpression } from './fakeExpression';

export const fakeArrowFunctionExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const arrowFunctionExpression = fakeBaseExpression({
		perf,
		type: 'ArrowFunctionExpression',
	}) as Partial<ArrowFunctionExpression>;

	if (!perf) {
		arrowFunctionExpression.expression = faker.datatype.boolean();

		arrowFunctionExpression. body = faker.helpers.arrayElement([
			fakeBlockStatement,
			fakeExpression,
		])();
	}

	return {
		...arrowFunctionExpression,
		...overrideProps,
	} as ArrowFunctionExpression;
};
