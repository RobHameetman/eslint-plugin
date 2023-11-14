import { isVariableDeclaration } from './isVariableDeclaration';
import { fakeVariableDeclaration } from '@test/fakes/estree/fakeVariableDeclaration';

describe('isVariableDeclaration()', () => {
	it('should return true given a valid VariableDeclaration', () => {
		expect(isVariableDeclaration(fakeVariableDeclaration())).toBe(true);
	});

	it('should return false given an invalid VariableDeclaration', () => {
		expect(isVariableDeclaration(fakeVariableDeclaration({ type: null }))).toBe(false);
	});
});
