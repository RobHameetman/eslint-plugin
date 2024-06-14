import { isBaseCallExpression } from './isBaseCallExpression';
import { fakeBaseCallExpression } from '@@/fakes/estree/fakeBaseCallExpression';

describe('isBaseCallExpression()', () => {
	it('should return true given a valid BaseCallExpression', () => {
		expect(isBaseCallExpression(fakeBaseCallExpression())).toBe(true);
	});

	it('should return false given an invalid BaseCallExpression', () => {
		expect(isBaseCallExpression(fakeBaseCallExpression({ type: null }))).toBe(false);
	});
});
