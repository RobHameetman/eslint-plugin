import { isLabeledStatement } from './isLabeledStatement';
import { fakeLabeledStatement } from '@@/fakes/estree/fakeLabeledStatement';

describe('isLabeledStatement()', () => {
	it('should return true given a valid LabeledStatement', () => {
		expect(isLabeledStatement(fakeLabeledStatement())).toBe(true);
	});

	it('should return false given an invalid LabeledStatement', () => {
		expect(isLabeledStatement(fakeLabeledStatement({ type: null }))).toBe(false);
	});
});
