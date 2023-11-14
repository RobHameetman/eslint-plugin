import { isVariableDeclarator } from './isVariableDeclarator';
import { fakeVariableDeclarator } from '@test/fakes/estree/fakeVariableDeclarator';

describe('isVariableDeclarator()', () => {
	it('should return true given a valid VariableDeclarator', () => {
		expect(isVariableDeclarator(fakeVariableDeclarator())).toBe(true);
	});

	it('should return false given an invalid VariableDeclarator', () => {
		expect(isVariableDeclarator(fakeVariableDeclarator({ type: null }))).toBe(false);
	});
});
