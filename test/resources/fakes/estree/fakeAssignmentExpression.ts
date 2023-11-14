import type { AssignmentExpression } from 'estree';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakePattern } from './fakePattern';
import { fakeExpression } from './fakeExpression';
import { randomAssignmentOperator } from '../../utils/estree/randomAssignmentOperator';

export const fakeAssignmentExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const assignmentExpression = fakeBaseExpression({
		perf,
		type: 'AssignmentExpression',
	}) as Partial<AssignmentExpression>;

	if (!perf) {
		assignmentExpression.operator = randomAssignmentOperator();
		assignmentExpression.left = fakePattern();
		assignmentExpression.right = fakeExpression();
	}

	return {
		...assignmentExpression,
		...overrideProps,
	} as AssignmentExpression;
};
