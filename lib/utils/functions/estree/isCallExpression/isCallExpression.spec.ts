import { isCallExpression } from './isCallExpression';
import { fakeCallExpression } from '@@/fakes/estree/fakeCallExpression';

describe('isCallExpression()', () => {
	it('should return true given a valid CallExpression', () => {
		expect(isCallExpression(fakeCallExpression())).toBe(true);
	});

	it('should return false given an invalid CallExpression', () => {
		expect(isCallExpression(fakeCallExpression({ type: null }))).toBe(false);
	});
});
