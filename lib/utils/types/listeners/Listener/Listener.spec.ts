import { isListener } from './Listener';
import { fakeListener, invalidKeys, validKeys } from './__test__';

describe('isListener()', () => {
	it('should return true given a valid ListenerFor', () => {
		expect(isListener(fakeListener(), validKeys)).toBe(true);
	});

	it('should return false given an invalid ListenerFor', () => {
		expect(isListener(fakeListener(), invalidKeys)).toBe(false);
	});
});
