import { areSelectors } from './Selectors';
import { fakeSelectors } from './__test__';

describe('areSelectors()', () => {
	it('should return true given a valid Selectors', () => {
		expect(areSelectors(fakeSelectors())).toBe(true);
	});

	it('should return false given an invalid Selectors', () => {
		expect(areSelectors(fakeSelectors({ invalid: true }))).toBe(false);
	});
});
