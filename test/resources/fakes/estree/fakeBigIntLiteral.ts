import type { BigIntLiteral } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeBasePattern } from './fakeBasePattern';

export const fakeBigIntLiteral = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const bigIntLiteral = fakeBaseExpression({
		...fakeBasePattern({
			...fakeBaseNode({
				perf,
				type: 'Literal',
				bigint: '',
			}),
		})
	}) as Partial<BigIntLiteral>;

	if (!perf) {
		bigIntLiteral.value = faker.helpers.arrayElement([
			faker.number.bigInt({ min: 1 }),
			undefined,
			null,
		]);

		if (bigIntLiteral.value) {
			bigIntLiteral.bigint = String(bigIntLiteral.value);
		}
	}

	return {
		...bigIntLiteral,
		...overrideProps,
	} as BigIntLiteral;
};
