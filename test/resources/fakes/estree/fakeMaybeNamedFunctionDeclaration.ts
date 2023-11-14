import type { MaybeNamedFunctionDeclaration } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseDeclaration } from './fakeBaseDeclaration';
import { fakeBaseFunction } from './fakeBaseFunction';
import { fakeBlockStatement } from './fakeBlockStatement';
import { fakeIdentifier } from './fakeIdentifier';

export const fakeMaybeNamedFunctionDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const maybeNamedFunctionDeclaration = fakeBaseFunction({
		...fakeBaseDeclaration({
			perf,
			type: 'FunctionDeclaration',
		}),
	}) as Partial<MaybeNamedFunctionDeclaration>;

	if (!perf) {
		maybeNamedFunctionDeclaration.id = faker.helpers.arrayElement([
			fakeIdentifier(),
			null,
		]);

		maybeNamedFunctionDeclaration.body = fakeBlockStatement();
	}

	return {
		...maybeNamedFunctionDeclaration,
		...overrideProps,
	} as MaybeNamedFunctionDeclaration;
};
