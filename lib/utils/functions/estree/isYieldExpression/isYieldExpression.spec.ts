import { isYieldExpression } from './isYieldExpression';
import { fakeYieldExpression } from '@test/fakes/estree/fakeYieldExpression';

describe('isYieldExpression()', () => {
	it('should return true given a valid YieldExpression', () => {
		expect(isYieldExpression(fakeYieldExpression())).toBe(true);
	});

	it('should return false given an invalid YieldExpression', () => {
		expect(isYieldExpression(fakeYieldExpression({ type: null }))).toBe(false);
	});
});
