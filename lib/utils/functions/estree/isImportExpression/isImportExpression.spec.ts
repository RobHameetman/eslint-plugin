import { isImportExpression } from './isImportExpression';
import { fakeImportExpression } from '@@/fakes/estree/fakeImportExpression';

describe('isImportExpression()', () => {
	it('should return true given a valid ImportExpression', () => {
		expect(isImportExpression(fakeImportExpression())).toBe(true);
	});

	it('should return false given an invalid ImportExpression', () => {
		expect(isImportExpression(fakeImportExpression({ type: null }))).toBe(false);
	});
});
