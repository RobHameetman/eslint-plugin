import type { CatchClause } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeBlockStatement } from './fakeBlockStatement';
import { fakePattern } from './fakePattern';

export const fakeCatchClause = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const catchClause = fakeBaseNode({
		perf,
		type: 'CatchClause',
		...overrideProps
	}) as Partial<CatchClause>;

	if (!perf) {
		catchClause.body = fakeBlockStatement();

		catchClause.param =
			faker.datatype.boolean()
				? fakePattern()
				: null;
	}

	return {
		...catchClause,
		...overrideProps,
	} as CatchClause;
};
