import { isSwitchStatement } from './isSwitchStatement';
import { fakeSwitchStatement } from '@test/fakes/estree/fakeSwitchStatement';

describe('isSwitchStatement()', () => {
	it('should return true given a valid SwitchStatement', () => {
		expect(isSwitchStatement(fakeSwitchStatement())).toBe(true);
	});

	it('should return false given an invalid SwitchStatement', () => {
		expect(isSwitchStatement(fakeSwitchStatement({ type: null }))).toBe(false);
	});
});
