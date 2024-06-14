import { isFunctionDeclaration } from './isFunctionDeclaration';
import { fakeFunctionDeclaration } from '@@/fakes/estree/fakeFunctionDeclaration';

describe('isFunctionDeclaration()', () => {
	it('should return true given a valid FunctionDeclaration', () => {
		expect(isFunctionDeclaration(fakeFunctionDeclaration())).toBe(true);
	});

	it('should return false given an invalid FunctionDeclaration', () => {
		expect(isFunctionDeclaration(fakeFunctionDeclaration({ id: null }))).toBe(false);
	});
});
