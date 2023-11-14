import { isFunctionExpression } from './isFunctionExpression';
import { fakeFunctionExpression } from '@test/fakes/estree/fakeFunctionExpression';

describe('isFunctionExpression()', () => {
	it('should return true given a valid FunctionExpression', () => {
		expect(isFunctionExpression(fakeFunctionExpression())).toBe(true);
	});

	it('should return false given an invalid FunctionExpression', () => {
		expect(isFunctionExpression(fakeFunctionExpression({ type: null }))).toBe(false);
	});
});
