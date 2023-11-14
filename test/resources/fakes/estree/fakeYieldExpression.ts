import type { YieldExpression } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeExpression } from './fakeExpression';

export const fakeYieldExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const yieldExpression = fakeBaseExpression({
		perf,
		type: 'YieldExpression',
	}) as Partial<YieldExpression>;

	if (!perf) {
		yieldExpression.delegate = faker.datatype.boolean();

		faker.helpers.maybe(() => {
			yieldExpression.argument =
				faker.datatype.boolean()
					? fakeExpression()
					: faker.helpers.arrayElement([undefined, null]);
		});
	}

	return {
		...yieldExpression,
		...overrideProps,
	} as YieldExpression;
};
