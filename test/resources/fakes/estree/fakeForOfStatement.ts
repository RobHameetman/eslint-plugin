import type { ForOfStatement } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseForXStatement } from './fakeBaseForXStatement';

export const fakeForOfStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const forOfStatement = fakeBaseForXStatement({
		perf,
		type: 'ForOfStatement',
		...overrideProps
	}) as Partial<ForOfStatement>;

	if (!perf) {
		forOfStatement.await = faker.datatype.boolean();
	}

	return {
		...forOfStatement,
		...overrideProps,
	} as ForOfStatement;
};
