import { isLiteral } from './isLiteral';
import { fakeLiteral } from '@@/fakes/estree/fakeLiteral';

describe('isLiteral()', () => {
	it('should return true given a valid Literal', () => {
		expect(isLiteral(fakeLiteral())).toBe(true);
	});

	it('should return false given an invalid Literal', () => {
		expect(isLiteral(fakeLiteral({ type: null }))).toBe(false);
	});
});
