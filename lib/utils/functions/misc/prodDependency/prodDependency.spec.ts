import { prodDependency } from './prodDependency';

describe('prodDependency()', () => {
	let error: Error | null = null;
	let result: unknown = null;

	beforeEach(() => {
		try {
			result = prodDependency('random-dev-dependency');
		} catch (e) {
			error = e as Error;
		}
	});

	afterAll(() => {
		jest.restoreAllMocks();

		error = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(error).toBe(null);
		expect(result).not.toBeNull();
	});
});
