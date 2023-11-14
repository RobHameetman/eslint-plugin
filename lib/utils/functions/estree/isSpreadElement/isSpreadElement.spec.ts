import { isSpreadElement } from './isSpreadElement';
import { fakeSpreadElement } from '@test/fakes/estree/fakeSpreadElement';

describe('isSpreadElement()', () => {
	it('should return true given a valid SpreadElement', () => {
		expect(isSpreadElement(fakeSpreadElement())).toBe(true);
	});

	it('should return false given an invalid SpreadElement', () => {
		expect(isSpreadElement(fakeSpreadElement({ type: null }))).toBe(false);
	});
});
