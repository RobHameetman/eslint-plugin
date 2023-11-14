import type { BreakStatement } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeIdentifier } from './fakeIdentifier';

export const fakeBreakStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const breakStatement = fakeBaseStatement({
		perf,
		type: 'BreakStatement',
		...overrideProps
	}) as Partial<BreakStatement>;

	if (!perf) {
		faker.helpers.maybe(() => {
			breakStatement.label =
				faker.datatype.boolean()
					? fakeIdentifier()
					: faker.helpers.arrayElement([undefined, null]);
		});
	}

	return {
		...breakStatement,
		...overrideProps,
	} as BreakStatement;
};
