import { isContinueStatement } from './isContinueStatement';
import { fakeContinueStatement } from '@@/fakes/estree/fakeContinueStatement';

describe('isContinueStatement()', () => {
	it('should return true given a valid ContinueStatement', () => {
		expect(isContinueStatement(fakeContinueStatement())).toBe(true);
	});

	it('should return false given an invalid ContinueStatement', () => {
		expect(isContinueStatement(fakeContinueStatement({ type: null }))).toBe(false);
	});
});
