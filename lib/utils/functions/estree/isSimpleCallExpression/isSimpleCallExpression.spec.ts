import { isSimpleCallExpression } from './isSimpleCallExpression';
import { fakeSimpleCallExpression } from '@@/fakes/estree/fakeSimpleCallExpression';

describe('isSimpleCallExpression()', () => {
	it('should return true given a valid SimpleCallExpression', () => {
		expect(isSimpleCallExpression(fakeSimpleCallExpression())).toBe(true);
	});

	it('should return false given an invalid SimpleCallExpression', () => {
		expect(isSimpleCallExpression(fakeSimpleCallExpression({ type: null }))).toBe(false);
	});
});
