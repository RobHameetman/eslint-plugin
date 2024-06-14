import { areHandlers } from './Handlers';
import { fakeHandlers, invalidKeys, validKeys } from './__test__';

describe('areHandlers()', () => {
	it('should return true given a valid Handlers', () => {
		expect(areHandlers(fakeHandlers(), validKeys)).toBe(true);
	});

	it('should return false given an invalid Handlers', () => {
		expect(areHandlers(fakeHandlers(), invalidKeys)).toBe(false);
	});
});
