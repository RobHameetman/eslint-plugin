import { isAssignmentPattern } from './isAssignmentPattern';
import { fakeAssignmentPattern } from '@@/fakes/estree/fakeAssignmentPattern';

describe('isAssignmentPattern()', () => {
	it('should return true given a valid AssignmentPattern', () => {
		expect(isAssignmentPattern(fakeAssignmentPattern())).toBe(true);
	});

	it('should return false given an invalid AssignmentPattern', () => {
		expect(isAssignmentPattern(fakeAssignmentPattern({ type: null }))).toBe(false);
	});
});
