import { isForStatement } from './isForStatement';
import { fakeForStatement } from '@test/fakes/estree/fakeForStatement';

describe('isForStatement()', () => {
	it('should return true given a valid ForStatement', () => {
		expect(isForStatement(fakeForStatement())).toBe(true);
	});

	it('should return false given an invalid ForStatement', () => {
		expect(isForStatement(fakeForStatement({ type: null }))).toBe(false);
	});
});
