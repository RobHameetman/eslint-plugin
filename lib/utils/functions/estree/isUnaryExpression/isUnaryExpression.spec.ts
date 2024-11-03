import { isUnaryExpression } from './isUnaryExpression';
import { fakeUnaryExpression } from '@@/fakes/estree/fakeUnaryExpression';

describe('isUnaryExpression()', () => {
	it('should return true given a valid UnaryExpression', () => {
		expect(isUnaryExpression(fakeUnaryExpression())).toBe(true);
	});

	it('should return false given an invalid UnaryExpression', () => {
		expect(isUnaryExpression(fakeUnaryExpression({ type: null }))).toBe(false);
	});
});
