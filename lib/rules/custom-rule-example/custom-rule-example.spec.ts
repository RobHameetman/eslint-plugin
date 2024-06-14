import rule from './custom-rule-example';
import { isCategory } from '@/utils/enums/Categories';

describe('custom-rule-example', () => {
	it('should be a valid ESLint rule module', () => {
		expect(rule).toStrictEqual(expect.any(Object));
		expect(rule).not.toBeNull();
		expect(rule).not.toBeInstanceOf(Array);
		expect('create' in rule).toBe(true);
		expect(rule.create).toStrictEqual(expect.any(Function));
	});

	it('should have a valid category', () => {
		expect(rule.meta?.docs?.category).toBeDefined();
		expect(isCategory(rule.meta?.docs?.category)).toBe(true);
	});
});
