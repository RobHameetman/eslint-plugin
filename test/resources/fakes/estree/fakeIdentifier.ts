import type { Identifier } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeBasePattern } from './fakeBasePattern';

export const fakeIdentifier = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const identifier = fakeBasePattern({
		...fakeBaseExpression({
			...fakeBaseNode({
				perf,
				type: 'Identifier',
			}),
		}),
	}) as Partial<Identifier>;

	if (!perf) {
		identifier.name = faker.lorem.word();
	}

	return {
		...identifier,
		...overrideProps,
	} as Identifier;
};
