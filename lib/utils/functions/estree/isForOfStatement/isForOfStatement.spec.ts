import { isForOfStatement } from './isForOfStatement';
import { fakeForOfStatement } from '@test/fakes/estree/fakeForOfStatement';

const stub = fakeForOfStatement();

console.log(stub);

describe('isForOfStatement()', () => {
	it('should return true given a valid ForOfStatement', () => {
		expect(isForOfStatement(stub)).toBe(true);
	});

	it('should return false given an invalid ForOfStatement', () => {
		expect(isForOfStatement(fakeForOfStatement({ type: null }))).toBe(false);
	});
});
