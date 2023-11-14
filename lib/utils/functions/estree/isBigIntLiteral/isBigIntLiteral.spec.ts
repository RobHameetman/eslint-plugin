import { isBigIntLiteral } from './isBigIntLiteral';
import { fakeBigIntLiteral } from '@test/fakes/estree/fakeBigIntLiteral';

describe('isBigIntLiteral()', () => {
	it('should return true given a valid BigIntLiteral', () => {
		expect(isBigIntLiteral(fakeBigIntLiteral())).toBe(true);
	});

	it('should return false given an invalid BigIntLiteral', () => {
		expect(isBigIntLiteral(fakeBigIntLiteral({ type: null }))).toBe(false);
	});
});
