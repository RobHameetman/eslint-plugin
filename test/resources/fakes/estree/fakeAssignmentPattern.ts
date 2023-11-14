import type { AssignmentPattern } from 'estree';
import { fakeBasePattern } from './fakeBasePattern';
import { fakeExpression } from './fakeExpression';
import { fakePattern } from './fakePattern';

export const fakeAssignmentPattern = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const assignmentPattern = fakeBasePattern({
		perf,
		type: 'AssignmentPattern',
	}) as Partial<AssignmentPattern>;

	if (!perf) {
		assignmentPattern.left = fakePattern();
		assignmentPattern.right = fakeExpression();
	}

	return {
		...assignmentPattern,
		...overrideProps,
	} as AssignmentPattern;
};
