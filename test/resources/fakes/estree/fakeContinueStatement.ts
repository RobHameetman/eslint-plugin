import type { ContinueStatement } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeIdentifier } from './fakeIdentifier';

export const fakeContinueStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const continueStatement = fakeBaseStatement({
		perf,
		type: 'ContinueStatement',
		...overrideProps
	}) as Partial<ContinueStatement>;

	if (!perf) {
		faker.helpers.maybe(() => {
			continueStatement.label =
				faker.datatype.boolean()
					? fakeIdentifier()
					: faker.helpers.arrayElement([undefined, null]);
		});
	}

	return {
		...continueStatement,
		...overrideProps,
	} as ContinueStatement;
};
