import { isClassExpression } from './isClassExpression';
import { fakeClassExpression } from '@test/fakes/estree/fakeClassExpression';

describe('isClassExpression()', () => {
	it('should return true given a valid ClassExpression', () => {
		expect(isClassExpression(fakeClassExpression())).toBe(true);
	});

	it('should return false given an invalid ClassExpression', () => {
		expect(isClassExpression(fakeClassExpression({ type: null }))).toBe(false);
	});
});
