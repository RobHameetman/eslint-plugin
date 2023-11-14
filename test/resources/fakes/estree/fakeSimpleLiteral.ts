import type { SimpleLiteral } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeBaseNode } from './fakeBaseNode';

export const fakeSimpleLiteral = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const simpleLiteral = fakeBaseExpression({
		...fakeBaseNode({
			perf,
			type: 'Literal',
			value: faker.helpers.arrayElement([
				faker.datatype.boolean(),
				faker.number.int(),
				faker.string.sample(),
				null,
			]),
		}),
	}) as Partial<SimpleLiteral>;

	return {
		...simpleLiteral,
		...overrideProps,
	} as SimpleLiteral;
};
