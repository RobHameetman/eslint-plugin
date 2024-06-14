import { isExportSpecifier } from './isExportSpecifier';
import { fakeExportSpecifier } from '@@/fakes/estree/fakeExportSpecifier';

describe('isExportSpecifier()', () => {
	it('should return true given a valid ExportSpecifier', () => {
		expect(isExportSpecifier(fakeExportSpecifier())).toBe(true);
	});

	it('should return false given an invalid ExportSpecifier', () => {
		expect(isExportSpecifier(fakeExportSpecifier({ type: null }))).toBe(false);
	});
});
