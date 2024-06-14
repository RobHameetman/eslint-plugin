import { isCategory } from './Categories';

describe('isCategory()', (): void => {
	it('should return true given the string value "Deprecated"', () => {
		expect(isCategory('Deprecated')).toBe(true);
	});

	it('should return true given the string value "Layout & Formatting"', () => {
		expect(isCategory('Layout & Formatting')).toBe(true);
	});

	it('should return true given the string value "Possible Problems"', () => {
		expect(isCategory('Possible Problems')).toBe(true);
	});

	it('should return true given the string value "Removed"', () => {
		expect(isCategory('Removed')).toBe(true);
	});

	it('should return true given the string value "Suggestions"', () => {
		expect(isCategory('Suggestions')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isCategory('')).toBe(false);
	});
});
