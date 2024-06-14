import { isForOfStatement } from './isForOfStatement';
import { fakeForOfStatement } from '@@/fakes/estree/fakeForOfStatement';

const stub = fakeForOfStatement();

describe('isForOfStatement()', () => {
	it('should return true given a valid ForOfStatement', () => {
		expect(isForOfStatement(stub)).toBe(true);
	});

	it('should return false given an invalid ForOfStatement', () => {
		expect(isForOfStatement(fakeForOfStatement({ type: null }))).toBe(false);
	});
});
