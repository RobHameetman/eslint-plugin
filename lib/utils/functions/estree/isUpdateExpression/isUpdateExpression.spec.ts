import { isUpdateExpression } from './isUpdateExpression';
import { fakeUpdateExpression } from '@test/fakes/estree/fakeUpdateExpression';

describe('isUpdateExpression()', () => {
	it('should return true given a valid UpdateExpression', () => {
		expect(isUpdateExpression(fakeUpdateExpression())).toBe(true);
	});

	it('should return false given an invalid UpdateExpression', () => {
		expect(isUpdateExpression(fakeUpdateExpression({ type: null }))).toBe(false);
	});
});
