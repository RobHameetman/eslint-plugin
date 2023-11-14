import { isClassDeclaration } from './isClassDeclaration';
import { fakeClassDeclaration } from '@test/fakes/estree/fakeClassDeclaration';

describe('isClassDeclaration()', () => {
	it('should return true given a valid ClassDeclaration', () => {
		expect(isClassDeclaration(fakeClassDeclaration())).toBe(true);
	});

	it('should return false given an invalid ClassDeclaration', () => {
		expect(isClassDeclaration(fakeClassDeclaration({ id: null }))).toBe(false);
	});
});
