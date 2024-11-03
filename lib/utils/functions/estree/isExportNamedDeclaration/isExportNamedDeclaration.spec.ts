import { isExportNamedDeclaration } from './isExportNamedDeclaration';
import { fakeExportNamedDeclaration } from '@@/fakes/estree/fakeExportNamedDeclaration';

describe('isExportNamedDeclaration()', () => {
	it('should return true given a valid ExportNamedDeclaration', () => {
		expect(isExportNamedDeclaration(fakeExportNamedDeclaration())).toBe(true);
	});

	it('should return false given an invalid ExportNamedDeclaration', () => {
		expect(isExportNamedDeclaration(fakeExportNamedDeclaration({ type: null }))).toBe(false);
	});
});
