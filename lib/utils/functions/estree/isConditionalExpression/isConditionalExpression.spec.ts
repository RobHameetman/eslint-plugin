import { isConditionalExpression } from './isConditionalExpression';
import { fakeConditionalExpression } from '@@/fakes/estree/fakeConditionalExpression';

describe('isConditionalExpression()', () => {
	it('should return true given a valid ConditionalExpression', () => {
		expect(isConditionalExpression(fakeConditionalExpression())).toBe(true);
	});

	it('should return false given an invalid ConditionalExpression', () => {
		expect(isConditionalExpression(fakeConditionalExpression({ type: null }))).toBe(false);
	});
});
