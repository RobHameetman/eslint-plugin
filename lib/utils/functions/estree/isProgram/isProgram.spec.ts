import { isProgram } from './isProgram';
import { fakeProgram } from '@test/fakes/estree/fakeProgram';

describe('isProgram()', () => {
	it('should return true given a valid Program', () => {
		expect(isProgram(fakeProgram())).toBe(true);
	});

	it('should return false given an invalid Program', () => {
		expect(isProgram(fakeProgram({ type: null }))).toBe(false);
	});
});
