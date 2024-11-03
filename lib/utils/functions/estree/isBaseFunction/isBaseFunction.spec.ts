import { isBaseFunction } from './isBaseFunction';
import { fakeBaseFunction } from '@@/fakes/estree/fakeBaseFunction';

describe('isBaseFunction()', () => {
	it('should return true given a valid BaseFunction', () => {
		expect(isBaseFunction(fakeBaseFunction())).toBe(true);
	});

	it('should return false given an invalid BaseFunction', () => {
		expect(isBaseFunction(fakeBaseFunction({ type: null }))).toBe(false);
	});
});
