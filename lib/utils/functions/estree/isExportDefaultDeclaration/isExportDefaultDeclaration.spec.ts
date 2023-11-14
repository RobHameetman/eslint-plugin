import { isExportDefaultDeclaration } from './isExportDefaultDeclaration';
import { fakeExportDefaultDeclaration } from '@test/fakes/estree/fakeExportDefaultDeclaration';

describe('isExportDefaultDeclaration()', () => {
	it('should return true given a valid ExportDefaultDeclaration', () => {
		expect(isExportDefaultDeclaration(fakeExportDefaultDeclaration())).toBe(true);
	});

	it('should return false given an invalid ExportDefaultDeclaration', () => {
		expect(isExportDefaultDeclaration(fakeExportDefaultDeclaration({ type: null }))).toBe(false);
	});
});
