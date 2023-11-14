import type { Literal } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeSimpleLiteral } from './fakeSimpleLiteral';
import { fakeRegExpLiteral } from './fakeRegExpLiteral';
import { fakeBigIntLiteral } from './fakeBigIntLiteral';

export const fakeLiteral = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const literal = faker.helpers.arrayElement([
		fakeSimpleLiteral,
		fakeRegExpLiteral,
		fakeBigIntLiteral,
	])({ perf, ...overrideProps });

	return {
		...literal,
		...overrideProps,
	} as Literal;
};
