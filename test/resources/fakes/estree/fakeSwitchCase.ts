import type { SwitchCase } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeExpression } from './fakeExpression';
import { fakeStatement } from './fakeStatement';

const fakeStatements = () => Array.from(
	{ length: faker.number.int({ min: 1, max: 5 }) },
	() => fakeStatement(),
);

export const fakeSwitchCase = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const switchCase = fakeBaseNode({
		perf,
		type: 'SwitchCase',
		...overrideProps
	}) as Partial<SwitchCase>;

	if (!perf) {
		switchCase.consequent = fakeStatements();

		faker.helpers.maybe(() => {
			switchCase.test =
				faker.datatype.boolean()
					? fakeExpression()
					: faker.helpers.arrayElement([undefined, null]);
		});
	}

	return {
		...switchCase,
		...overrideProps,
	} as SwitchCase;
};
