import { isAssignmentProperty } from './isAssignmentProperty';
import { fakeAssignmentProperty } from '@@/fakes/estree/fakeAssignmentProperty';

describe('isAssignmentProperty()', () => {
	it('should return true given a valid AssignmentProperty', () => {
		expect(isAssignmentProperty(fakeAssignmentProperty())).toBe(true);
	});

	it('should return false given an invalid AssignmentProperty', () => {
		expect(isAssignmentProperty(fakeAssignmentProperty({ method: true }))).toBe(false);
	});
});
