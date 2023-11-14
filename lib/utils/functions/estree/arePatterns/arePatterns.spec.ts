import { arePatterns } from './arePatterns';
import { fakePatterns } from '@test/fakes/estree/fakePatterns';

describe('arePatterns()', () => {
	it('should return true given valid Patterns', () => {
		expect(arePatterns(fakePatterns())).toBe(true);
	});

	it('should return false given invalid Patterns', () => {
		expect(arePatterns(fakePatterns({ type: null }))).toBe(false);
	});
});
