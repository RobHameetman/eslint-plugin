import { isTemplateLiteral } from './isTemplateLiteral';
import { fakeTemplateLiteral } from '@test/fakes/estree/fakeTemplateLiteral';

describe('isTemplateLiteral()', () => {
	it('should return true given a valid TemplateLiteral', () => {
		expect(isTemplateLiteral(fakeTemplateLiteral())).toBe(true);
	});

	it('should return false given an invalid TemplateLiteral', () => {
		expect(isTemplateLiteral(fakeTemplateLiteral({ type: null }))).toBe(false);
	});
});
