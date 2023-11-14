import { areExpressions } from './areExpressions';
import { fakeExpressions } from '@test/fakes/estree/fakeExpressions';

describe('areExpressions()', () => {
	it('should return true given valid Expressions', () => {
		expect(areExpressions(fakeExpressions())).toBe(true);
	});

	it('should return false given invalid Expressions', () => {
		expect(areExpressions(fakeExpressions({ type: null }))).toBe(false);
	});
});
