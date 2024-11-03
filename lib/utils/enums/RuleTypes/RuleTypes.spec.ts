import { isRuleType } from './RuleTypes';

describe('isRuleType()', () => {
	it('should return true given the string value "problem"', () => {
		expect(isRuleType('problem')).toBe(true);
	});

	it('should return true given the string value "suggestion"', () => {
		expect(isRuleType('suggestion')).toBe(true);
	});

	it('should return true given the string value "layout"', () => {
		expect(isRuleType('layout')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isRuleType('')).toBe(false);
	});
});
