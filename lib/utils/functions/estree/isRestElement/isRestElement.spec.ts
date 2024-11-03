import { isRestElement } from './isRestElement';
import { fakeRestElement } from '@@/fakes/estree/fakeRestElement';

describe('isRestElement()', () => {
	it('should return true given a valid RestElement', () => {
		expect(isRestElement(fakeRestElement())).toBe(true);
	});

	it('should return false given an invalid RestElement', () => {
		expect(isRestElement(fakeRestElement({ type: null }))).toBe(false);
	});
});
