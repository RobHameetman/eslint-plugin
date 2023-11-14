import { isSuper } from './isSuper';
import { fakeSuper } from '@test/fakes/estree/fakeSuper';

describe('isSuper()', () => {
	it('should return true given a valid Super', () => {
		expect(isSuper(fakeSuper())).toBe(true);
	});

	it('should return false given an invalid Super', () => {
		expect(isSuper(fakeSuper({ type: null }))).toBe(false);
	});
});
