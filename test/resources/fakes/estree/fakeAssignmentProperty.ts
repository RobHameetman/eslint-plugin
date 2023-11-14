import type { AssignmentProperty } from 'estree';
import { fakeProperty } from './fakeProperty';
import { fakePattern } from './fakePattern';

export const fakeAssignmentProperty = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const assignmentProperty = fakeProperty({
		perf,
		kind: 'init',
		method: false,
		value: fakePattern(),
	}) as Partial<AssignmentProperty>;

	return {
		...assignmentProperty,
		...overrideProps,
	} as AssignmentProperty;
};
