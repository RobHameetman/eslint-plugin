import { isExpressionStatement } from './isExpressionStatement';
import { fakeExpressionStatement } from '@test/fakes/estree/fakeExpressionStatement';

describe('isExpressionStatement()', () => {
	it('should return true given a valid ExpressionStatement', () => {
		expect(isExpressionStatement(fakeExpressionStatement())).toBe(true);
	});

	it('should return false given an invalid ExpressionStatement', () => {
		expect(isExpressionStatement(fakeExpressionStatement({ type: null }))).toBe(false);
	});
});
