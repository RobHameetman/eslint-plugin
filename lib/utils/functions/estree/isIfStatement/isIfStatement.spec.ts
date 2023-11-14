import { isIfStatement } from './isIfStatement';
import { fakeIfStatement } from '@test/fakes/estree/fakeIfStatement';

describe('isIfStatement()', () => {
	it('should return true given a valid IfStatement', () => {
		expect(isIfStatement(fakeIfStatement())).toBe(true);
	});

	it('should return false given an invalid IfStatement', () => {
		expect(isIfStatement(fakeIfStatement({ type: null }))).toBe(false);
	});
});
