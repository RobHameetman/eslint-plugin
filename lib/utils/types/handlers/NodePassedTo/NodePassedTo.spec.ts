import { isNodePassedTo } from './NodePassedTo';
import { fakeNodePassedTo } from './__test__';

describe('isNodePassedTo()', () => {
	it('should return true given a valid NodePassedTo', () => {
		expect(isNodePassedTo(fakeNodePassedTo())).toBe(true);
	});

	it('should return false given an invalid NodePassedTo', () => {
		expect(isNodePassedTo(fakeNodePassedTo({ type: 'test', parent: null }))).toBe(false);
	});
});
