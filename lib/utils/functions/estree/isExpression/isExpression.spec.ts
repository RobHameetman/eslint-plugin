import { isExpression } from './isExpression';
import { fakeExpression } from '@test/fakes/estree/fakeExpression';

describe('isExpression()', () => {
	it('should return true given a valid Expression', () => {
		expect(isExpression(fakeExpression())).toBe(true);
	});

	it('should return false given an invalid Expression', () => {
		expect(isExpression(fakeExpression({ type: null }))).toBe(false);
	});
});
