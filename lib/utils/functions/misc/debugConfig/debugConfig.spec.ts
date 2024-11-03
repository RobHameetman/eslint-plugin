import { debugConfig } from './debugConfig';

describe('debugConfig()', () => {
	let mockConsoleInfo: jest.SpyInstance | null = null;
	let error: Error | null = null;
	let result: unknown = null;

	beforeEach(() => {
		try {
			mockConsoleInfo = jest.spyOn(console, 'info').mockImplementation();

			result = debugConfig([{ name: 'test' }]);
		} catch (e) {
			error = e as Error;
		}
	});

	afterEach(() => {
		jest.clearAllMocks();

		mockConsoleInfo = null;
		error = null;
		result = null;
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should not return a value', () => {
		expect(result).toBeUndefined();
	});

	it('should call console.info()', () => {
		expect(mockConsoleInfo).toHaveBeenCalled();
	});
});
