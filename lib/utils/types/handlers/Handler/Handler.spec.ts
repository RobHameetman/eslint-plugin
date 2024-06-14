import { isHandler } from './Handler';
import { fakeHandler } from './__test__';

describe('isHandler()', () => {
	it('should return true given a function', () => {
		expect(isHandler(fakeHandler())).toBe(true);
	});

	it('should return false given null', () => {
		expect(isHandler(null)).toBe(false);
	});
});
