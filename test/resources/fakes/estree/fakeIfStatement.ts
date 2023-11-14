import type { IfStatement } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeExpression } from './fakeExpression';
import { fakeStatement } from './fakeStatement';

export const fakeIfStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const ifStatement = fakeBaseStatement({
		perf,
		type: 'IfStatement',
		...overrideProps
	}) as Partial<IfStatement>;

	if (!perf) {
		ifStatement.consequent = fakeStatement();
		ifStatement.test = fakeExpression();

		faker.helpers.maybe(() => {
			ifStatement.alternate =
				faker.datatype.boolean()
					? fakeStatement()
					: faker.helpers.arrayElement([undefined, null]);
		});
	}

	return {
		...ifStatement,
		...overrideProps,
	} as IfStatement;
};
