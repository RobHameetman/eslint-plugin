import { isThisExpression } from './isThisExpression';
import { fakeThisExpression } from '@@/fakes/estree/fakeThisExpression';

describe('isThisExpression()', () => {
	it('should return true given a valid ThisExpression', () => {
		expect(isThisExpression(fakeThisExpression())).toBe(true);
	});

	it('should return false given an invalid ThisExpression', () => {
		expect(isThisExpression(fakeThisExpression({ type: null }))).toBe(false);
	});
});
