import { isLogicalExpression } from './isLogicalExpression';
import { fakeLogicalExpression } from '@test/fakes/estree/fakeLogicalExpression';

describe('isLogicalExpression()', () => {
	it('should return true given a valid LogicalExpression', () => {
		expect(isLogicalExpression(fakeLogicalExpression())).toBe(true);
	});

	it('should return false given an invalid LogicalExpression', () => {
		expect(isLogicalExpression(fakeLogicalExpression({ type: null }))).toBe(false);
	});
});
