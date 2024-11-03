import { isFromSchema } from './FromSchema';
import { fakeFromSchema, mockSchema } from './__test__';

describe('isFromSchema()', () => {
	it('should return true given a valid RuleFactory', () => {
		expect(isFromSchema(fakeFromSchema(), mockSchema)).toBe(true);
	});

	it('should return false given an invalid RuleFactory', () => {
		expect(isFromSchema(fakeFromSchema({ invalid: true }), mockSchema)).toBe(false);
	});
});
