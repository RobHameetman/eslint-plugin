import { isBaseDeclaration } from './isBaseDeclaration';
import { fakeBaseDeclaration } from '@@/fakes/estree/fakeBaseDeclaration';

describe('isBaseDeclaration()', () => {
	it('should return true given a valid BaseDeclaration', () => {
		expect(isBaseDeclaration(fakeBaseDeclaration())).toBe(true);
	});

	it('should return false given an invalid BaseDeclaration', () => {
		expect(isBaseDeclaration(fakeBaseDeclaration({ type: null }))).toBe(false);
	});
});
