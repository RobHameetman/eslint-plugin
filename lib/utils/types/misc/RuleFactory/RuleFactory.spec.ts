import { isRuleFactory } from './RuleFactory';
import { fakeRuleFactory } from './__test__';
import { fakeRuleContext } from '../RuleContext/__test__';

describe('isRuleFactory()', () => {
	it('should return true given a valid RuleFactory', () => {
		expect(isRuleFactory(fakeRuleFactory(), fakeRuleContext())).toBe(true);
	});

	it('should return false given an invalid RuleFactory', () => {
		expect(isRuleFactory(fakeRuleFactory({ invalid: true }), fakeRuleContext())).toBe(false);
	});
});
