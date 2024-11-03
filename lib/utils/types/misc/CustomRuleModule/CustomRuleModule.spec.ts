import { Rule } from 'eslint';
import { isCustomRuleModule } from './CustomRuleModule';
import { fakeCustomRuleModule } from './__test__';

describe('isCustomRuleModule()', () => {
	it('should return true given a valid CustomRuleModule', () => {
		expect(isCustomRuleModule(fakeCustomRuleModule(), {} as Rule.Context)).toBe(true);
	});

	it('should return false given an invalid CustomRuleModule', () => {
		expect(isCustomRuleModule(fakeCustomRuleModule({ invalid: true }), {} as Rule.Context)).toBe(false);
	});
});
