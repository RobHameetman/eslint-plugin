import { isImported } from './isImported';

const config = {
	files: [
		'**/*.[jt]s?(x)',
	],
	rules: {
		'rule': 'error',
	},
};

describe('isImported()', () => {
	it('should return true given a valid config', () => {
		expect(isImported(config)).toBe(
			true,
		);
	});

	it('should return false given an empty object', () => {
		expect(isImported({})).toBe(false);
	});
});
