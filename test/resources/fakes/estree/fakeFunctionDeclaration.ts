import type { FunctionDeclaration } from 'estree';
import { fakeMaybeNamedFunctionDeclaration } from './fakeMaybeNamedFunctionDeclaration';
import { fakeIdentifier } from './fakeIdentifier';

export const fakeFunctionDeclaration = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const functionDeclaration = fakeMaybeNamedFunctionDeclaration({
		perf,
		id: fakeIdentifier(),
	}) as Partial<FunctionDeclaration>;

	return {
		...functionDeclaration,
		...overrideProps,
	} as FunctionDeclaration;
};
