import { areSettings } from './Settings';
import { fakeSettings } from './__test__';

describe('areSettings()', () => {
	it('should return true given a valid RuleModule', () => {
		expect(areSettings(fakeSettings())).toBe(true);
	});

	it('should return false given an invalid RuleModule', () => {
		expect(areSettings(fakeSettings({ invalid: true }))).toBe(false);
	});
});
