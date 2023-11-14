import { isObjectPattern } from './isObjectPattern';
import { fakeObjectPattern } from '@test/fakes/estree/fakeObjectPattern';

describe('isObjectPattern()', () => {
	it('should return true given a valid ObjectPattern', () => {
		expect(isObjectPattern(fakeObjectPattern())).toBe(true);
	});

	it('should return false given an invalid ObjectPattern', () => {
		expect(isObjectPattern(fakeObjectPattern({ type: null }))).toBe(false);
	});
});
