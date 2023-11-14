import { isImportNamespaceSpecifier } from './isImportNamespaceSpecifier';
import { fakeImportNamespaceSpecifier } from '@test/fakes/estree/fakeImportNamespaceSpecifier';

describe('isImportNamespaceSpecifier()', () => {
	it('should return true given a valid ImportNamespaceSpecifier', () => {
		expect(isImportNamespaceSpecifier(fakeImportNamespaceSpecifier())).toBe(true);
	});

	it('should return false given an invalid ImportNamespaceSpecifier', () => {
		expect(isImportNamespaceSpecifier(fakeImportNamespaceSpecifier({ type: null }))).toBe(false);
	});
});
