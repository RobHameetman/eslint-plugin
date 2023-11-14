import { areListenersFor } from './ListenersFor';
import { fakeListenersFor, invalidKeys, validKeys } from './__test__';

describe('areListenersFor()', () => {
	it('should return true given a valid ListenerFor', () => {
		expect(areListenersFor(fakeListenersFor(), validKeys)).toBe(true);
	});

	it('should return false given an invalid ListenerFor', () => {
		expect(areListenersFor(fakeListenersFor(), invalidKeys)).toBe(false);
	});
});
