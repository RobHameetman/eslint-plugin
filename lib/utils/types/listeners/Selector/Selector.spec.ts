import { isSelector } from './Selector';
import { fakeSelector } from './__test__';

describe('isSelector()', () => {
	it('should return true given a valid Selector', () => {
		expect(isSelector(fakeSelector())).toBe(true);
	});

	it('should return false given an invalid Selector', () => {
		expect(isSelector(fakeSelector({ invalid: true }))).toBe(false);
	});
});
