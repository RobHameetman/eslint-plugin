import type { MaybeNamedClassDeclaration } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseDeclaration } from './fakeBaseDeclaration';
import { fakeBaseClass } from './fakeBaseClass';
import { fakeIdentifier } from './fakeIdentifier';

export const fakeMaybeNamedClassDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const maybeNamedClassDeclaration = fakeBaseClass({
		...fakeBaseDeclaration({
			perf,
			type: 'ClassDeclaration',
		}),
	}) as Partial<MaybeNamedClassDeclaration>;

	if (!perf) {
		maybeNamedClassDeclaration.id = faker.helpers.arrayElement([
			fakeIdentifier(),
			null,
		]);
	}

	return {
		...maybeNamedClassDeclaration,
		...overrideProps,
	} as MaybeNamedClassDeclaration;
};
