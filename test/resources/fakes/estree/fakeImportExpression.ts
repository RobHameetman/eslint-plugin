import type { ImportExpression } from 'estree';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeExpression } from './fakeExpression';

export const fakeImportExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const importExpression = fakeBaseExpression({
		perf,
		type: 'ImportExpression',
	}) as Partial<ImportExpression>;

	if (!perf) {
		importExpression.source = fakeExpression();
	}

	return {
		...importExpression,
		...overrideProps,
	} as ImportExpression;
};
