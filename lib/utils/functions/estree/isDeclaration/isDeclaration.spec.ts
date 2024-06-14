import { isDeclaration } from './isDeclaration';
import { fakeDeclaration } from '@@/fakes/estree/fakeDeclaration';

describe('isDeclaration()', () => {
	it('should return true given a valid Declaration', () => {
		expect(isDeclaration(fakeDeclaration())).toBe(true);
	});

	it('should return false given an invalid Declaration', () => {
		expect(isDeclaration(fakeDeclaration({ type: null }))).toBe(false);
	});
});
