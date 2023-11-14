import type { MemberExpression } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeBasePattern } from './fakeBasePattern';
import { fakeExpression } from './fakeExpression';

export const fakeMemberExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const memberExpression = fakeBaseExpression({
		...fakeBasePattern({
			perf,
			type: 'MemberExpression',
		})
	}) as Partial<MemberExpression>;

	if (!perf) {
		memberExpression.object = fakeExpression();
		memberExpression.property = fakeExpression();
		memberExpression.computed = faker.datatype.boolean();
		memberExpression.optional = faker.datatype.boolean();
	}

	return {
		...memberExpression,
		...overrideProps,
	} as MemberExpression;
};
