import { isFixability } from './Fixabilities';

describe('isFixability()', () => {
	it('should return true given the string value "code"', () => {
		expect(isFixability('code')).toBe(true);
	});

	it('should return true given the string value "whitespace"', () => {
		expect(isFixability('whitespace')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isFixability('')).toBe(false);
	});
});
