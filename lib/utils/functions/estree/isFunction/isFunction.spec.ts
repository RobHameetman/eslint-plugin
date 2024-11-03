import { isFunction } from './isFunction';
import { fakeFunction } from '@@/fakes/estree/fakeFunction';

describe('isFunction()', () => {
	it('should return true given a valid Function', () => {
		expect(isFunction(fakeFunction())).toBe(true);
	});

	it('should return false given an invalid Function', () => {
		expect(isFunction(fakeFunction({ type: null }))).toBe(false);
	});
});
