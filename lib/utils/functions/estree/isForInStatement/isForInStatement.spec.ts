import { isForInStatement } from './isForInStatement';
import { fakeForInStatement } from '@test/fakes/estree/fakeForInStatement';

describe('isForInStatement()', () => {
	it('should return true given a valid ForInStatement', () => {
		expect(isForInStatement(fakeForInStatement())).toBe(true);
	});

	it('should return false given an invalid ForInStatement', () => {
		expect(isForInStatement(fakeForInStatement({ type: null }))).toBe(false);
	});
});
