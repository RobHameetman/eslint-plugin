import { isBreakStatement } from './isBreakStatement';
import { fakeBreakStatement } from '@test/fakes/estree/fakeBreakStatement';

describe('isBreakStatement()', () => {
	it('should return true given a valid BreakStatement', () => {
		expect(isBreakStatement(fakeBreakStatement())).toBe(true);
	});

	it('should return false given an invalid BreakStatement', () => {
		expect(isBreakStatement(fakeBreakStatement({ type: null }))).toBe(false);
	});
});
