import { isLegacyConfig } from './LegacyConfig';
import { fakeLegacyConfig } from './__test__';

describe('isLegacyConfig()', () => {
	it('should return true given a valid LegacyConfig', () => {
		expect(isLegacyConfig(fakeLegacyConfig())).toBe(true);
	});

	it('should return false given an invalid LegacyConfig', () => {
		expect(isLegacyConfig(fakeLegacyConfig({ invalid: true }))).toBe(false);
	});
});
