import { isDirective } from './isDirective';
import { fakeDirective } from '@test/fakes/estree/fakeDirective';

describe('isDirective()', () => {
	it('should return true given a valid Directive', () => {
		expect(isDirective(fakeDirective())).toBe(true);
	});

	it('should return false given an invalid Directive', () => {
		expect(isDirective(fakeDirective({ type: null }))).toBe(false);
	});
});
