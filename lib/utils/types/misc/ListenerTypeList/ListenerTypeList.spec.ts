import { isListenerTypeList } from './ListenerTypeList';
import { fakeListenerTypeList } from './__test__';

describe('isListenerTypeList()', () => {
	it('should return true given a valid ListenerTypeList', () => {
		expect(isListenerTypeList(fakeListenerTypeList())).toBe(true);
	});

	it('should return false given an invalid ListenerTypeList', () => {
		expect(isListenerTypeList(fakeListenerTypeList({ invalid: true }))).toBe(false);
	});
});
