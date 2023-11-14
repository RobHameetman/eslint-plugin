import { isChainElement } from './isChainElement';
import { fakeChainElement } from '@test/fakes/estree/fakeChainElement';

describe('isChainElement()', () => {
	it('should return true given a valid ChainElement', () => {
		expect(isChainElement(fakeChainElement())).toBe(true);
	});

	it('should return false given an invalid ChainElement', () => {
		expect(isChainElement(fakeChainElement({ type: null }))).toBe(false);
	});
});
