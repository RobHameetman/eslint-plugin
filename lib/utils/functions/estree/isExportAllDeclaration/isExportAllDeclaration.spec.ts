import { isExportAllDeclaration } from './isExportAllDeclaration';
import { fakeExportAllDeclaration } from '@@/fakes/estree/fakeExportAllDeclaration';

describe('isExportAllDeclaration()', () => {
	it('should return true given a valid ExportAllDeclaration', () => {
		expect(isExportAllDeclaration(fakeExportAllDeclaration())).toBe(true);
	});

	it('should return false given an invalid ExportAllDeclaration', () => {
		expect(isExportAllDeclaration(fakeExportAllDeclaration({ type: null }))).toBe(false);
	});
});
