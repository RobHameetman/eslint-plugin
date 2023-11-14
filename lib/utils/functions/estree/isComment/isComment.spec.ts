import { isComment } from './isComment';
import { fakeComment } from '@test/fakes/estree/fakeComment';

describe('isComment()', () => {
	it('should return true given a valid Comment', () => {
		expect(isComment(fakeComment())).toBe(true);
	});

	it('should return false given an invalid Comment', () => {
		expect(isComment(fakeComment({ type: null }))).toBe(false);
	});
});
