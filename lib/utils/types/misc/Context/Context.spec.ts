import { isContext } from './Context';
import { fakeContext, invalidRuleContext, isOptions } from './__test__';

describe('isContext()', () => {
	it('should return true given a valid RuleContext', () => {
		expect(isContext(fakeContext(), isOptions)).toBe(true);
	});

	it('should return false given an invalid RuleContext', () => {
		expect(isContext(invalidRuleContext(), isOptions)).toBe(false);
	});
});
