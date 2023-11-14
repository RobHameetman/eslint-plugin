import { isBasePattern } from './isBasePattern';
import { fakeBasePattern } from '@test/fakes/estree/fakeBasePattern';

describe('isBasePattern()', () => {
	it('should return true given a valid BasePattern', () => {
		expect(isBasePattern(fakeBasePattern())).toBe(true);
	});

	it('should return false given an invalid BasePattern', () => {
		expect(isBasePattern(fakeBasePattern({ type: null }))).toBe(false);
	});
});
