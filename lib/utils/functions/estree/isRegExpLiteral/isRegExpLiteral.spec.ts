import { isRegExpLiteral } from './isRegExpLiteral';
import { fakeRegExpLiteral } from '@@/fakes/estree/fakeRegExpLiteral';

describe('isRegExpLiteral()', () => {
	it('should return true given a valid RegExpLiteral', () => {
		expect(isRegExpLiteral(fakeRegExpLiteral())).toBe(true);
	});

	it('should return false given an invalid RegExpLiteral', () => {
		expect(isRegExpLiteral(fakeRegExpLiteral({ type: null }))).toBe(false);
	});
});
