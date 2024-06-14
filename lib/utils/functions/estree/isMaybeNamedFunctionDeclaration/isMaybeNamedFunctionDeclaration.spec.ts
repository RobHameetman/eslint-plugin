import { isMaybeNamedFunctionDeclaration } from './isMaybeNamedFunctionDeclaration';
import { fakeMaybeNamedFunctionDeclaration } from '@@/fakes/estree/fakeMaybeNamedFunctionDeclaration';

const stub = fakeMaybeNamedFunctionDeclaration();

describe('isMaybeNamedFunctionDeclaration()', () => {
	it('should return true given a valid MaybeNamedFunctionDeclaration', () => {
		expect(isMaybeNamedFunctionDeclaration(stub)).toBe(true);
	});

	it('should return false given an invalid MaybeNamedFunctionDeclaration', () => {
		expect(isMaybeNamedFunctionDeclaration(fakeMaybeNamedFunctionDeclaration({ type: null }))).toBe(false);
	});
});
