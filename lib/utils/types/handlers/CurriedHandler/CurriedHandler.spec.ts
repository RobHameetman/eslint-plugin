import { isCurriedHandler } from './CurriedHandler';
import { fakeCurriedHandler } from './__test__';

describe('isCurriedHandler()', () => {
	it('should return true given a valid ValidationTask', () => {
		expect(isCurriedHandler(fakeCurriedHandler())).toBe(true);
	});

	it('should return false given an invalid ValidationTask', () => {
		expect(isCurriedHandler(fakeCurriedHandler({ invalid: true }))).toBe(false);
	});
});
