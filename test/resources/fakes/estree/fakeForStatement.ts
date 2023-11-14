import type { ForStatement } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeExpression } from './fakeExpression';
import { fakeStatement } from './fakeStatement';
import { fakeVariableDeclaration } from './fakeVariableDeclaration';

export const fakeForStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const forStatement = fakeBaseStatement({
		perf,
		type: 'ForStatement',
		...overrideProps
	}) as Partial<ForStatement>;

	if (!perf) {
		forStatement.body = fakeStatement();

		faker.helpers.maybe(() => {
			forStatement.init =
				faker.datatype.boolean()
					? faker.helpers.arrayElement([
							fakeVariableDeclaration,
							fakeExpression,
						])()
					: faker.helpers.arrayElement([undefined, null]);
		});

		faker.helpers.maybe(() => {
			forStatement.test =
				faker.datatype.boolean()
					? fakeExpression()
					: faker.helpers.arrayElement([undefined, null]);
		});

		faker.helpers.maybe(() => {
			forStatement.update =
				faker.datatype.boolean()
					? fakeExpression()
					: faker.helpers.arrayElement([undefined, null]);
		});
	}

	return {
		...forStatement,
		...overrideProps,
	} as ForStatement;
};
