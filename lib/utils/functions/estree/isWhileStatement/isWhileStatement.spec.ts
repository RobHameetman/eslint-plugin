import { isWhileStatement } from './isWhileStatement';
import { fakeWhileStatement } from '@test/fakes/estree/fakeWhileStatement';

describe('isWhileStatement()', () => {
	it('should return true given a valid WhileStatement', () => {
		expect(isWhileStatement(fakeWhileStatement())).toBe(true);
	});

	it('should return false given an invalid WhileStatement', () => {
		expect(isWhileStatement(fakeWhileStatement({ type: null }))).toBe(false);
	});
});
