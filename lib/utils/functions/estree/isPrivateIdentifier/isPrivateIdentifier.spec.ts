import { isPrivateIdentifier } from './isPrivateIdentifier';
import { fakePrivateIdentifier } from '@test/fakes/estree/fakePrivateIdentifier';

describe('isPrivateIdentifier()', () => {
	it('should return true given a valid PrivateIdentifier', () => {
		expect(isPrivateIdentifier(fakePrivateIdentifier())).toBe(true);
	});

	it('should return false given an invalid PrivateIdentifier', () => {
		expect(isPrivateIdentifier(fakePrivateIdentifier({ type: null }))).toBe(false);
	});
});
