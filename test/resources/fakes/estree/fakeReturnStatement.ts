import type { ReturnStatement } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeExpression } from './fakeExpression';

export const fakeReturnStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const returnStatement = fakeBaseStatement({
		perf,
		type: 'ReturnStatement',
		...overrideProps
	}) as Partial<ReturnStatement>;

	if (!perf) {
		faker.helpers.maybe(() => {
			returnStatement.argument =
				faker.datatype.boolean()
					? fakeExpression()
					: faker.helpers.arrayElement([undefined, null]);
		});
	}

	return {
		...returnStatement,
		...overrideProps,
	} as ReturnStatement;
};
