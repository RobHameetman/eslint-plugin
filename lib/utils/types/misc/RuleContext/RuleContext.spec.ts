import { isRuleContext } from './RuleContext';
import { fakeRuleContext, invalidRuleContext, isOptions } from './__test__';

describe('isRuleContext()', () => {
	it('should return true given a valid RuleContext', () => {
		expect(isRuleContext(fakeRuleContext(), isOptions)).toBe(true);
	});

	it('should return false given an invalid RuleContext', () => {
		expect(isRuleContext(invalidRuleContext(), isOptions)).toBe(false);
	});
});
