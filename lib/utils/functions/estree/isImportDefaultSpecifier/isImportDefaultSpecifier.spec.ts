import { isImportDefaultSpecifier } from './isImportDefaultSpecifier';
import { fakeImportDefaultSpecifier } from '@@/fakes/estree/fakeImportDefaultSpecifier';

describe('isImportDefaultSpecifier()', () => {
	it('should return true given a valid ImportDefaultSpecifier', () => {
		expect(isImportDefaultSpecifier(fakeImportDefaultSpecifier())).toBe(true);
	});

	it('should return false given an invalid ImportDefaultSpecifier', () => {
		expect(isImportDefaultSpecifier(fakeImportDefaultSpecifier({ type: null }))).toBe(false);
	});
});
