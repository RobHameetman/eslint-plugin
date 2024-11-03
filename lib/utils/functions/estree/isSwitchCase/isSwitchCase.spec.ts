import { isSwitchCase } from './isSwitchCase';
import { fakeSwitchCase } from '@@/fakes/estree/fakeSwitchCase';

describe('isSwitchCase()', () => {
	it('should return true given a valid SwitchCase', () => {
		expect(isSwitchCase(fakeSwitchCase())).toBe(true);
	});

	it('should return false given an invalid SwitchCase', () => {
		expect(isSwitchCase(fakeSwitchCase({ type: null }))).toBe(false);
	});
});
