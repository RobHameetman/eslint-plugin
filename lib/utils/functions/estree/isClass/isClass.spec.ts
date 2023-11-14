import { isClass } from './isClass';
import { fakeClass } from '@test/fakes/estree/fakeClass';

describe('isClass()', () => {
	it('should return true given a valid Class', () => {
		expect(isClass(fakeClass())).toBe(true);
	});

	it('should return false given an invalid Class', () => {
		expect(isClass(fakeClass({ type: null }))).toBe(false);
	});
});
