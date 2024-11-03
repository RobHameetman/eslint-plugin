import { REPO_URL } from '@/utils/constants/misc/REPO_URL';
import { onTest } from '@@/utils/misc/onTest';
import { ruleUrl } from './ruleUrl';

describe('ruleUrl()', () => {
	let error: Error | null = null;
	let name: string | null = null;
	let result: unknown = null;
	let index = 1;

	beforeAll(() => {
		const { warn } = console;

		jest.spyOn(console, 'warn').mockImplementation(
			(...args: Array<unknown>) => warn(...args),
		);
	});

	beforeEach(() => {
		try {
			onTest(index, {
				1: () => {
					name = 'test-rule-name';
				},
				2: () => {
					name = '';
				},
				3: () => {
					name = 'inval1dly-n4m3dRule';
				},
			});

			result = ruleUrl(name as string);
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.resetAllMocks();

		error = null;
		name = null;
		result = null;

		index++;
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should return the specific url for the rule given a valid name', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(result).toContain(REPO_URL);
		expect(result).toContain(name);
	});

	it('should return the repo url for the rule and print a warning given an empty string', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(console.warn).toBeCalledTimes(1);
		expect(result).toBe(REPO_URL);
	});

	it('should return the repo url for the rule and print a warning given an incorrectly formatted rule name', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(console.warn).toBeCalledTimes(1);
		expect(result).toBe(REPO_URL);
	});
});
