import { isImportSpecifier } from './isImportSpecifier';
import { fakeImportSpecifier } from '@test/fakes/estree/fakeImportSpecifier';

describe('isImportSpecifier()', () => {
	it('should return true given a valid ImportSpecifier', () => {
		expect(isImportSpecifier(fakeImportSpecifier())).toBe(true);
	});

	it('should return false given an invalid ImportSpecifier', () => {
		expect(isImportSpecifier(fakeImportSpecifier({ type: null }))).toBe(false);
	});
});
