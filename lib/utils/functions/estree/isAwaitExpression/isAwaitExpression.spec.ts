import { isAwaitExpression } from './isAwaitExpression';
import { fakeAwaitExpression } from '@test/fakes/estree/fakeAwaitExpression';

describe('isAwaitExpression()', () => {
	it('should return true given a valid AwaitExpression', () => {
		expect(isAwaitExpression(fakeAwaitExpression())).toBe(true);
	});

	it('should return false given an invalid AwaitExpression', () => {
		expect(isAwaitExpression(fakeAwaitExpression({ type: null }))).toBe(false);
	});
});
