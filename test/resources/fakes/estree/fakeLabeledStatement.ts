import type { LabeledStatement } from 'estree';
import { fakeBaseStatement } from './fakeBaseStatement';
import { fakeIdentifier } from './fakeIdentifier';
import { fakeStatement } from './fakeStatement';

export const fakeLabeledStatement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const labeledStatement = fakeBaseStatement({
		perf,
		type: 'LabeledStatement',
		...overrideProps
	}) as Partial<LabeledStatement>;

	if (!perf) {
		labeledStatement.label = fakeIdentifier();
		labeledStatement.body = fakeStatement();
	}

	return {
		...labeledStatement,
		...overrideProps,
	} as LabeledStatement;
};
