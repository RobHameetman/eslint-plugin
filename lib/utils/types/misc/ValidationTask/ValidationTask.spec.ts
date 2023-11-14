import { isValidationTask } from './ValidationTask';
import { fakeValidationTask } from './__test__';

describe('isValidationTask()', () => {
	it('should return true given a valid ValidationTask', () => {
		expect(isValidationTask(fakeValidationTask())).toBe(true);
	});

	it('should return false given an invalid ValidationTask', () => {
		expect(isValidationTask(fakeValidationTask({ invalid: true }))).toBe(false);
	});
});
