import { isCatchClause } from './isCatchClause';
import { fakeCatchClause } from '@@/fakes/estree/fakeCatchClause';

describe('isCatchClause()', () => {
	it('should return true given a valid CatchClause', () => {
		expect(isCatchClause(fakeCatchClause())).toBe(true);
	});

	it('should return false given an invalid CatchClause', () => {
		expect(isCatchClause(fakeCatchClause({ type: null }))).toBe(false);
	});
});
