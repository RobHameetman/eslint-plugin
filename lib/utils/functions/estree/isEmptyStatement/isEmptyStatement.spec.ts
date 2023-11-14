import { isEmptyStatement } from './isEmptyStatement';
import { fakeEmptyStatement } from '@test/fakes/estree/fakeEmptyStatement';

describe('isEmptyStatement()', () => {
	it('should return true given a valid EmptyStatement', () => {
		expect(isEmptyStatement(fakeEmptyStatement())).toBe(true);
	});

	it('should return false given an invalid EmptyStatement', () => {
		expect(isEmptyStatement(fakeEmptyStatement({ type: null }))).toBe(false);
	});
});
