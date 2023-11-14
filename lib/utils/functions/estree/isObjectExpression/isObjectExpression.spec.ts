import { isObjectExpression } from './isObjectExpression';
import { fakeObjectExpression } from '@test/fakes/estree/fakeObjectExpression';

describe('isObjectExpression()', () => {
	it('should return true given a valid ObjectExpression', () => {
		expect(isObjectExpression(fakeObjectExpression())).toBe(true);
	});

	it('should return false given an invalid ObjectExpression', () => {
		expect(isObjectExpression(fakeObjectExpression({ type: null }))).toBe(false);
	});
});
