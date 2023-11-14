import type { PrivateIdentifier } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';

export const fakePrivateIdentifier = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const privateIdentifier = fakeBaseNode({
		perf,
		type: 'PrivateIdentifier',
	}) as Partial<PrivateIdentifier>;

	if (!perf) {
		privateIdentifier.name = faker.lorem.word();
	}

	return {
		...privateIdentifier,
		...overrideProps,
	} as PrivateIdentifier;
};
