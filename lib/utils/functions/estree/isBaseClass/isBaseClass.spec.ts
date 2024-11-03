import { isBaseClass } from './isBaseClass';
import { fakeBaseClass } from '@@/fakes/estree/fakeBaseClass';

describe('isBaseClass()', () => {
	it('should return true given a valid BaseClass', () => {
		expect(isBaseClass(fakeBaseClass())).toBe(true);
	});

	it('should return false given an invalid BaseClass', () => {
		expect(isBaseClass(fakeBaseClass({ type: null }))).toBe(false);
	});
});
