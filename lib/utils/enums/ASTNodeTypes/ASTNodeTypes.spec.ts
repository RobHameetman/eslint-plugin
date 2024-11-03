import { AST_NODE_TYPES, isASTNodeType } from './ASTNodeTypes';

describe('isASTNodeType()', () => {
	it.each(AST_NODE_TYPES)('should return true given the string value "%s"', (identifier) => {
		expect(isASTNodeType(identifier)).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isASTNodeType('')).toBe(false);
	});
});
