import { isSimpleLiteral } from './isSimpleLiteral';
import { fakeSimpleLiteral } from '@@/fakes/estree/fakeSimpleLiteral';

describe('isSimpleLiteral()', () => {
	it('should return true given a valid SimpleLiteral', () => {
		expect(isSimpleLiteral(fakeSimpleLiteral())).toBe(true);
	});

	it('should return false given an invalid SimpleLiteral', () => {
		expect(isSimpleLiteral(fakeSimpleLiteral({ type: null }))).toBe(false);
	});
});
