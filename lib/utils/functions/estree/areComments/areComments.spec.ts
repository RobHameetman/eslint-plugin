import { areComments } from './areComments';
import { fakeComments } from '@@/fakes/estree/fakeComments';

describe('areComments()', () => {
	it('should return true given valid Comments', () => {
		expect(areComments(fakeComments())).toBe(true);
	});

	it('should return false given invalid Comments', () => {
		expect(areComments(fakeComments({ type: null }))).toBe(false);
	});
});
