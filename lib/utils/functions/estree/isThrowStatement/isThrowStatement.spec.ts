import { isThrowStatement } from './isThrowStatement';
import { fakeThrowStatement } from '@@/fakes/estree/fakeThrowStatement';

describe('isThrowStatement()', () => {
	it('should return true given a valid ThrowStatement', () => {
		expect(isThrowStatement(fakeThrowStatement())).toBe(true);
	});

	it('should return false given an invalid ThrowStatement', () => {
		expect(isThrowStatement(fakeThrowStatement({ type: null }))).toBe(false);
	});
});
