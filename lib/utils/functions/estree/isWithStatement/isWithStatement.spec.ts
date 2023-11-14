import { isWithStatement } from './isWithStatement';
import { fakeWithStatement } from '@test/fakes/estree/fakeWithStatement';

describe('isWithStatement()', () => {
	it('should return true given a valid WithStatement', () => {
		expect(isWithStatement(fakeWithStatement())).toBe(true);
	});

	it('should return false given an invalid WithStatement', () => {
		expect(isWithStatement(fakeWithStatement({ type: null }))).toBe(false);
	});
});
