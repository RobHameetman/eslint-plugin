import type { TryStatement } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeBlockStatement } from './fakeBlockStatement';
import { fakeCatchClause } from './fakeCatchClause';

export const fakeTryStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const tryStatement = fakeBaseStatement({
		perf,
		type: 'TryStatement',
		...overrideProps
	}) as Partial<TryStatement>;

	if (!perf) {
		tryStatement.block = fakeBlockStatement();

		faker.helpers.maybe(() => {
			tryStatement.handler =
				faker.datatype.boolean()
					? fakeCatchClause()
					: faker.helpers.arrayElement([undefined, null]);
		});

		faker.helpers.maybe(() => {
			tryStatement.finalizer =
				faker.datatype.boolean()
					? fakeBlockStatement()
					: faker.helpers.arrayElement([undefined, null]);
		});
	}

	return {
		...tryStatement,
		...overrideProps,
	} as TryStatement;
};
