import { isStaticBlock } from './isStaticBlock';
import { fakeStaticBlock } from '@test/fakes/estree/fakeStaticBlock';

describe('isStaticBlock()', () => {
	it('should return true given a valid StaticBlock', () => {
		expect(isStaticBlock(fakeStaticBlock())).toBe(true);
	});

	it('should return false given an invalid StaticBlock', () => {
		expect(isStaticBlock(fakeStaticBlock({ type: null }))).toBe(false);
	});
});
