import { isTryStatement } from './isTryStatement';
import { fakeTryStatement } from '@test/fakes/estree/fakeTryStatement';

describe('isTryStatement()', () => {
	it('should return true given a valid TryStatement', () => {
		expect(isTryStatement(fakeTryStatement())).toBe(true);
	});

	it('should return false given an invalid TryStatement', () => {
		expect(isTryStatement(fakeTryStatement({ type: null }))).toBe(false);
	});
});
