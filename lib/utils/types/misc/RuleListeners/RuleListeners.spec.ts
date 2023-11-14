import { areRuleListeners } from './RuleListeners';
import { fakeRuleListeners, invalidKeys, validKeys } from './__test__';

describe('areRuleListeners()', () => {
	it('should return true given a valid RuleListeners', () => {
		expect(areRuleListeners(fakeRuleListeners(), validKeys)).toBe(true);
	});

	it('should return false given an invalid RuleListeners', () => {
		expect(areRuleListeners(fakeRuleListeners(), invalidKeys)).toBe(false);
	});
});
