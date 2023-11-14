import type { SwitchStatement } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeExpression } from './fakeExpression';
import { fakeSwitchCase } from './fakeSwitchCase';

const fakeCases = () => Array.from(
	{ length: faker.number.int({ min: 1, max: 5 }) },
	() => fakeSwitchCase(),
);

export const fakeSwitchStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const switchStatement = fakeBaseStatement({
		perf,
		type: 'SwitchStatement',
		...overrideProps
	}) as Partial<SwitchStatement>;

	if (!perf) {
		switchStatement.cases = fakeCases();
		switchStatement.discriminant = fakeExpression();
	}

	return {
		...switchStatement,
		...overrideProps,
	} as SwitchStatement;
};
