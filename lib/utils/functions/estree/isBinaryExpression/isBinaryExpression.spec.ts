import { isBinaryExpression } from './isBinaryExpression';
import { fakeBinaryExpression } from '@test/fakes/estree/fakeBinaryExpression';

describe('isBinaryExpression()', () => {
	it('should return true given a valid BinaryExpression', () => {
		expect(isBinaryExpression(fakeBinaryExpression())).toBe(true);
	});

	it('should return false given an invalid BinaryExpression', () => {
		expect(isBinaryExpression(fakeBinaryExpression({ type: null }))).toBe(false);
	});
});
