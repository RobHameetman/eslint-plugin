import { isChainExpression } from './isChainExpression';
import { fakeChainExpression } from '@test/fakes/estree/fakeChainExpression';

describe('isChainExpression()', () => {
	it('should return true given a valid ChainExpression', () => {
		expect(isChainExpression(fakeChainExpression())).toBe(true);
	});

	it('should return false given an invalid ChainExpression', () => {
		expect(isChainExpression(fakeChainExpression({ type: null }))).toBe(false);
	});
});
