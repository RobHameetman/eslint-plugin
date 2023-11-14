import { isStatement } from './isStatement';
import { fakeStatement } from '@test/fakes/estree/fakeStatement';

describe('isStatement()', () => {
	it('should return true given a valid Statement', () => {
		expect(isStatement(fakeStatement())).toBe(true);
	});

	it('should return false given an invalid Statement', () => {
		expect(isStatement(fakeStatement({ type: null }))).toBe(false);
	});
});
