import { isBaseModuleDeclaration } from './isBaseModuleDeclaration';
import { fakeBaseModuleDeclaration } from '@@/fakes/estree/fakeBaseModuleDeclaration';

describe('isBaseModuleDeclaration()', () => {
	it('should return true given a valid BaseModuleDeclaration', () => {
		expect(isBaseModuleDeclaration(fakeBaseModuleDeclaration())).toBe(true);
	});

	it('should return false given an invalid BaseModuleDeclaration', () => {
		expect(isBaseModuleDeclaration(fakeBaseModuleDeclaration({ type: null }))).toBe(false);
	});
});
