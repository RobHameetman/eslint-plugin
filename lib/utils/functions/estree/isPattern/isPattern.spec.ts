import { isPattern } from './isPattern';
import { fakePattern } from '@@/fakes/estree/fakePattern';

describe('isPattern()', () => {
	it('should return true given a valid Pattern', () => {
		expect(isPattern(fakePattern())).toBe(true);
	});

	it('should return false given an invalid Pattern', () => {
		expect(isPattern(fakePattern({ type: null }))).toBe(false);
	});
});
