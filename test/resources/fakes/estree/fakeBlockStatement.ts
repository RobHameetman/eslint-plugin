import type { BlockStatement } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseStatement } from './fakeBaseStatement';

export const fakeBlockStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const blockStatement = fakeBaseStatement({
		perf,
		type: 'BlockStatement',
	}) as Partial<BlockStatement>;

	if (!perf) {
		blockStatement.body = [] as BlockStatement['body'];

		faker.helpers.maybe(() => {
			blockStatement.innerComments = [] as BlockStatement['innerComments'];
		});
	}

	return {
		...blockStatement,
		...overrideProps,
	} as BlockStatement;
};
