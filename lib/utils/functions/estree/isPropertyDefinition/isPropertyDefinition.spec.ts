import { isPropertyDefinition } from './isPropertyDefinition';
import { fakePropertyDefinition } from '@test/fakes/estree/fakePropertyDefinition';

describe('isPropertyDefinition()', () => {
	it('should return true given a valid PropertyDefinition', () => {
		expect(isPropertyDefinition(fakePropertyDefinition())).toBe(true);
	});

	it('should return false given an invalid PropertyDefinition', () => {
		expect(isPropertyDefinition(fakePropertyDefinition({ type: null }))).toBe(false);
	});
});
