import { isBaseExpression } from './isBaseExpression';
import { fakeBaseExpression } from '@@/fakes/estree/fakeBaseExpression';

describe('isBaseExpression()', () => {
	it('should return true given a valid BaseExpression', () => {
		expect(isBaseExpression(fakeBaseExpression())).toBe(true);
	});

	it('should return false given an invalid BaseExpression', () => {
		expect(isBaseExpression(fakeBaseExpression({ type: null }))).toBe(false);
	});
});
