import { isProperty } from './isProperty';
import { fakeProperty } from '@test/fakes/estree/fakeProperty';

describe('isProperty()', () => {
	it('should return true given a valid Property', () => {
		expect(isProperty(fakeProperty())).toBe(true);
	});

	it('should return false given an invalid Property', () => {
		expect(isProperty(fakeProperty({ type: null }))).toBe(false);
	});
});
