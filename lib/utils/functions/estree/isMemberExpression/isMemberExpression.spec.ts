import { isMemberExpression } from './isMemberExpression';
import { fakeMemberExpression } from '@test/fakes/estree/fakeMemberExpression';

describe('isMemberExpression()', () => {
	it('should return true given a valid MemberExpression', () => {
		expect(isMemberExpression(fakeMemberExpression())).toBe(true);
	});

	it('should return false given an invalid MemberExpression', () => {
		expect(isMemberExpression(fakeMemberExpression({ type: null }))).toBe(false);
	});
});
