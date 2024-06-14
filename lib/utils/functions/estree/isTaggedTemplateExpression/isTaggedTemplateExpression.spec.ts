import { isTaggedTemplateExpression } from './isTaggedTemplateExpression';
import { fakeTaggedTemplateExpression } from '@@/fakes/estree/fakeTaggedTemplateExpression';

describe('isTaggedTemplateExpression()', () => {
	it('should return true given a valid TaggedTemplateExpression', () => {
		expect(isTaggedTemplateExpression(fakeTaggedTemplateExpression())).toBe(true);
	});

	it('should return false given an invalid TaggedTemplateExpression', () => {
		expect(isTaggedTemplateExpression(fakeTaggedTemplateExpression({ type: null }))).toBe(false);
	});
});
