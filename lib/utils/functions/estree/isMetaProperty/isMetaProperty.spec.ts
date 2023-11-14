import { isMetaProperty } from './isMetaProperty';
import { fakeMetaProperty } from '@test/fakes/estree/fakeMetaProperty';

describe('isMetaProperty()', () => {
	it('should return true given a valid MetaProperty', () => {
		expect(isMetaProperty(fakeMetaProperty())).toBe(true);
	});

	it('should return false given an invalid MetaProperty', () => {
		expect(isMetaProperty(fakeMetaProperty({ type: null }))).toBe(false);
	});
});
