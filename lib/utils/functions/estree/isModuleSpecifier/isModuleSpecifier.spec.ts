import { isModuleSpecifier } from './isModuleSpecifier';
import { fakeModuleSpecifier } from '@@/fakes/estree/fakeModuleSpecifier';

describe('isModuleSpecifier()', () => {
	it('should return true given a valid ModuleSpecifier', () => {
		expect(isModuleSpecifier(fakeModuleSpecifier())).toBe(true);
	});

	it('should return false given an invalid ModuleSpecifier', () => {
		expect(isModuleSpecifier(fakeModuleSpecifier({ type: null }))).toBe(false);
	});
});
