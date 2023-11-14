import type { ClassDeclaration } from 'estree';
import { fakeMaybeNamedClassDeclaration } from './fakeMaybeNamedClassDeclaration';
import { fakeIdentifier } from './fakeIdentifier';

export const fakeClassDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const classDeclaration = fakeMaybeNamedClassDeclaration({
		perf,
		id: fakeIdentifier(),
	}) as Partial<ClassDeclaration>;

	return {
		...classDeclaration,
		...overrideProps,
	} as ClassDeclaration;
};
