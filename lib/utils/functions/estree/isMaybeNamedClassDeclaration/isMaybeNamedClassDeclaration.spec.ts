import { isMaybeNamedClassDeclaration } from './isMaybeNamedClassDeclaration';
import { fakeMaybeNamedClassDeclaration } from '@@/fakes/estree/fakeMaybeNamedClassDeclaration';

describe('isMaybeNamedClassDeclaration()', () => {
	it('should return true given a valid MaybeNamedClassDeclaration', () => {
		expect(isMaybeNamedClassDeclaration(fakeMaybeNamedClassDeclaration())).toBe(true);
	});

	it('should return false given an invalid MaybeNamedClassDeclaration', () => {
		expect(isMaybeNamedClassDeclaration(fakeMaybeNamedClassDeclaration({ type: null }))).toBe(false);
	});
});
