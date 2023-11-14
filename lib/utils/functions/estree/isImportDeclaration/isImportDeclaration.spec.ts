import { isImportDeclaration } from './isImportDeclaration';
import { fakeImportDeclaration } from '@test/fakes/estree/fakeImportDeclaration';

describe('isImportDeclaration()', () => {
	it('should return true given a valid ImportDeclaration', () => {
		expect(isImportDeclaration(fakeImportDeclaration())).toBe(true);
	});

	it('should return false given an invalid ImportDeclaration', () => {
		expect(isImportDeclaration(fakeImportDeclaration({ type: null }))).toBe(false);
	});
});
