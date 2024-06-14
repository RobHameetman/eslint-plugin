import { isBaseForXStatement } from './isBaseForXStatement';
import { fakeBaseForXStatement } from '@@/fakes/estree/fakeBaseForXStatement';

describe('isBaseForXStatement()', () => {
	it('should return true given a valid BaseForXStatement', () => {
		expect(isBaseForXStatement(fakeBaseForXStatement())).toBe(true);
	});

	it('should return false given an invalid BaseForXStatement', () => {
		expect(isBaseForXStatement(fakeBaseForXStatement({ right: null }))).toBe(false);
	});
});
