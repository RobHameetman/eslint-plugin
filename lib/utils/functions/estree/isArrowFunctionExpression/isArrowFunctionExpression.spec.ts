import { isArrowFunctionExpression } from './isArrowFunctionExpression';
import { fakeArrowFunctionExpression } from '@test/fakes/estree/fakeArrowFunctionExpression';

describe('isArrowFunctionExpression()', () => {
	it('should return true given a valid ArrowFunctionExpression', () => {
		expect(isArrowFunctionExpression(fakeArrowFunctionExpression())).toBe(true);
	});

	it('should return false given an invalid ArrowFunctionExpression', () => {
		expect(isArrowFunctionExpression(fakeArrowFunctionExpression({ type: null }))).toBe(false);
	});
});
