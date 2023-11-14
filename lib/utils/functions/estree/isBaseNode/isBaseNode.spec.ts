import { isBaseNode } from './isBaseNode';
import { fakeBaseNode } from '@test/fakes/estree/fakeBaseNode';

describe('isBaseNode()', () => {
	it('should return true given a valid BaseNode', () => {
		expect(isBaseNode(fakeBaseNode())).toBe(true);
	});

	it('should return false given an invalid BaseNode', () => {
		expect(isBaseNode(fakeBaseNode({ type: null }))).toBe(false);
	});
});
