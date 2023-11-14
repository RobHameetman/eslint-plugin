import { isModuleDeclaration } from './isModuleDeclaration';
import { fakeModuleDeclaration } from '@test/fakes/estree/fakeModuleDeclaration';

describe('isModuleDeclaration()', () => {
	it('should return true given a valid ModuleDeclaration', () => {
		expect(isModuleDeclaration(fakeModuleDeclaration())).toBe(true);
	});

	it('should return false given an invalid ModuleDeclaration', () => {
		expect(isModuleDeclaration(fakeModuleDeclaration({ type: null }))).toBe(false);
	});
});
