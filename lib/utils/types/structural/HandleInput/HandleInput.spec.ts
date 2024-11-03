import { isHandleInput } from './HandleInput';
import { fakeHandleInput } from './__test__';

describe('isHandleInput()', () => {
	it('should return true given a valid HandleInput', () => {
		expect(isHandleInput(fakeHandleInput())).toBe(true);
	});

	it('should return false given an invalid HandleInput', () => {
		expect(isHandleInput(fakeHandleInput({ selectors: null }))).toBe(false);
	});
});
