import { isNewExpression } from './isNewExpression';
import { fakeNewExpression } from '@test/fakes/estree/fakeNewExpression';

describe('isNewExpression()', () => {
	it('should return true given a valid NewExpression', () => {
		expect(isNewExpression(fakeNewExpression())).toBe(true);
	});

	it('should return false given an invalid NewExpression', () => {
		expect(isNewExpression(fakeNewExpression({ type: null }))).toBe(false);
	});
});
