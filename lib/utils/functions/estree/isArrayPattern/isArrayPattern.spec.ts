import { isArrayPattern } from './isArrayPattern';
import { fakeArrayPattern } from '@test/fakes/estree/fakeArrayPattern';

describe('isArrayPattern()', () => {
	it('should return true given a valid ArrayPattern', () => {
		expect(isArrayPattern(fakeArrayPattern())).toBe(true);
	});

	it('should return false given an invalid ArrayPattern', () => {
		expect(isArrayPattern(fakeArrayPattern({ type: null }))).toBe(false);
	});
});
