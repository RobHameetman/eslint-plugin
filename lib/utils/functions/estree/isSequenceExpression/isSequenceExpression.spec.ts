import { isSequenceExpression } from './isSequenceExpression';
import { fakeSequenceExpression } from '@test/fakes/estree/fakeSequenceExpression';

describe('isSequenceExpression()', () => {
	it('should return true given a valid SequenceExpression', () => {
		expect(isSequenceExpression(fakeSequenceExpression())).toBe(true);
	});

	it('should return false given an invalid SequenceExpression', () => {
		expect(isSequenceExpression(fakeSequenceExpression({ type: null }))).toBe(false);
	});
});
