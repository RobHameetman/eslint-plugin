import { isDoWhileStatement } from './isDoWhileStatement';
import { fakeDoWhileStatement } from '@@/fakes/estree/fakeDoWhileStatement';

describe('isDoWhileStatement()', () => {
	it('should return true given a valid DoWhileStatement', () => {
		expect(isDoWhileStatement(fakeDoWhileStatement())).toBe(true);
	});

	it('should return false given an invalid DoWhileStatement', () => {
		expect(isDoWhileStatement(fakeDoWhileStatement({ type: null }))).toBe(false);
	});
});
