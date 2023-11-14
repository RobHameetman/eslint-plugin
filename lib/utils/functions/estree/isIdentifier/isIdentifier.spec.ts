import { isIdentifier } from './isIdentifier';
import { fakeIdentifier } from '@test/fakes/estree/fakeIdentifier';

describe('isIdentifier()', () => {
	it('should return true given a valid Identifier', () => {
		expect(isIdentifier(fakeIdentifier())).toBe(true);
	});

	it('should return false given an invalid Identifier', () => {
		expect(isIdentifier(fakeIdentifier({ type: null }))).toBe(false);
	});
});
