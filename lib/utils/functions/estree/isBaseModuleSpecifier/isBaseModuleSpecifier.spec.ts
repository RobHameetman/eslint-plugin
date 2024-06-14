import { isBaseModuleSpecifier } from './isBaseModuleSpecifier';
import { fakeBaseModuleSpecifier } from '@@/fakes/estree/fakeBaseModuleSpecifier';

describe('isBaseModuleSpecifier()', () => {
	it('should return true given a valid BaseModuleSpecifier', () => {
		expect(isBaseModuleSpecifier(fakeBaseModuleSpecifier())).toBe(true);
	});

	it('should return false given an invalid BaseModuleSpecifier', () => {
		expect(isBaseModuleSpecifier(fakeBaseModuleSpecifier({ type: null }))).toBe(false);
	});
});
