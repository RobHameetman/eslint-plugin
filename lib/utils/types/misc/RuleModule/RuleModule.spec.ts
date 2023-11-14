import { isRuleModule } from './RuleModule';
import { fakeRuleModule } from './__test__';

describe('isRuleModule()', () => {
	it('should return true given a valid RuleModule', () => {
		expect(isRuleModule(fakeRuleModule(), {})).toBe(true);
	});

	it('should return false given an invalid RuleModule', () => {
		expect(isRuleModule(fakeRuleModule({ invalid: true }), {})).toBe(false);
	});
});
