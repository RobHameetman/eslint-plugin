import { isAssignmentExpression } from './isAssignmentExpression';
import { fakeAssignmentExpression } from '@@/fakes/estree/fakeAssignmentExpression';

describe('isAssignmentExpression()', () => {
	it('should return true given a valid AssignmentExpression', () => {
		expect(isAssignmentExpression(fakeAssignmentExpression())).toBe(true);
	});

	it('should return false given an invalid AssignmentExpression', () => {
		expect(isAssignmentExpression(fakeAssignmentExpression({ type: null }))).toBe(false);
	});
});
