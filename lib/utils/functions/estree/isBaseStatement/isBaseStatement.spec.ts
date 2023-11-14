import { isBaseStatement } from './isBaseStatement';
import { fakeBaseStatement } from '@test/fakes/estree/fakeBaseStatement';

describe('isBaseStatement()', () => {
	it('should return true given a valid BaseStatement', () => {
		expect(isBaseStatement(fakeBaseStatement())).toBe(true);
	});

	it('should return false given an invalid BaseStatement', () => {
		expect(isBaseStatement(fakeBaseStatement({ type: null }))).toBe(false);
	});
});
