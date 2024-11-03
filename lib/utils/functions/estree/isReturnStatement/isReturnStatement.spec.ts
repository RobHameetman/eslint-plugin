import { isReturnStatement } from './isReturnStatement';
import { fakeReturnStatement } from '@@/fakes/estree/fakeReturnStatement';

describe('isReturnStatement()', () => {
	it('should return true given a valid ReturnStatement', () => {
		expect(isReturnStatement(fakeReturnStatement())).toBe(true);
	});

	it('should return false given an invalid ReturnStatement', () => {
		expect(isReturnStatement(fakeReturnStatement({ type: null }))).toBe(false);
	});
});
