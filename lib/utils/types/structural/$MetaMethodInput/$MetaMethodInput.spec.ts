import { is$MetaMethodInput } from './$MetaMethodInput';
import { fake$MetaMethodInput } from './__test__';

describe('is$MetaMethodInput()', () => {
	it('should return true given a valid $MetaMethodInput', () => {
		expect(is$MetaMethodInput(fake$MetaMethodInput())).toBe(true);
	});

	it('should return false given an invalid $MetaMethodInput', () => {
		expect(is$MetaMethodInput(fake$MetaMethodInput({ recommended: false }))).toBe(false);
	});
});
