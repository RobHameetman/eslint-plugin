import { isListenerFactory } from './ListenerFactory';
import { fakeListenerFactory } from './__test__';
import { fakeContext } from '@/utils/types/misc/Context/__test__/fakeContext';

describe('isListenerFactory()', () => {
	it('should return true given a valid ListenerFactory', () => {
		expect(isListenerFactory(fakeListenerFactory(), fakeContext())).toBe(true);
	});

	it('should return false given an invalid ListenerFactory', () => {
		expect(isListenerFactory(fakeListenerFactory({ invalid: true }), fakeContext())).toBe(false);
	});
});
