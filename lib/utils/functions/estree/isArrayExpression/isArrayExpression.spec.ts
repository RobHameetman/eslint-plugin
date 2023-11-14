import { isArrayExpression } from './isArrayExpression';
import { fakeArrayExpression } from '@test/fakes/estree/fakeArrayExpression';

describe('isArrayExpression()', () => {
	it('should return true given a valid ArrayExpression', () => {
		expect(isArrayExpression(fakeArrayExpression())).toBe(true);
	});

	it('should return false given an invalid ArrayExpression', () => {
		expect(isArrayExpression(fakeArrayExpression({ type: null }))).toBe(false);
	});
});
