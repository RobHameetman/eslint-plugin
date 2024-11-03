import { isString } from '@rob.hameetman/type-guards';
import { REPO_URL } from './REPO_URL';

describe('REPO_URL', () => {
	let name: string | null = null;

	beforeEach(() => {
		name = (process.env.npm_package_name || '').split('/').at(1) || null;
	});

	afterEach(() => {
		name = null;
	});

	it('should be a string', () => {
		expect(isString(REPO_URL)).toBe(true);
	});

	it('should be a valid url', () => {
		expect(REPO_URL).toStrictEqual(expect.stringMatching(/^https?:\/\/([a-zA-Z0-9()]+\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/));
	});

	it('should contain name of this package', () => {
		expect(name).not.toBeNull()
		expect(REPO_URL).toStrictEqual(expect.stringContaining(name as string));
	});
});
