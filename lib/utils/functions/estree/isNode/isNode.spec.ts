import { isNode } from './isNode';
import { fakeNode } from '@test/fakes/estree/fakeNode';

describe('isNode()', () => {
	it('should return true given a valid Node', () => {
		expect(isNode(fakeNode())).toBe(true);
	});

	it('should return false given an invalid Node', () => {
		expect(isNode(fakeNode({ type: null }))).toBe(false);
	});
});
