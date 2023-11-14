import { isTemplateElement } from './isTemplateElement';
import { fakeTemplateElement } from '@test/fakes/estree/fakeTemplateElement';

describe('isTemplateElement()', () => {
	it('should return true given a valid TemplateElement', () => {
		expect(isTemplateElement(fakeTemplateElement())).toBe(true);
	});

	it('should return false given an invalid TemplateElement', () => {
		expect(isTemplateElement(fakeTemplateElement({ type: null }))).toBe(false);
	});
});
