describe('IS_TEST', () => {
	let IS_TEST: unknown = null;

	beforeAll(() => {
		Object.defineProperties(process.env, {
			NODE_ENV: {
				get: jest.fn()
					.mockReturnValueOnce('test')
					.mockReturnValueOnce('production')
					.mockReturnValue('development')
			}
		});
	});

	beforeEach(async () => {
		({ IS_TEST } = await import('./IS_TEST'));
	});

	afterEach(() => {
		jest.resetModules();
		IS_TEST = null;
	});

	it('should be true when NODE_ENV is "test"', () => {
		expect(IS_TEST).toBe(true);
	});

	it('should be false when NODE_ENV is "production"', () => {
		expect(IS_TEST).toBe(false);
	});

	it('should be false when NODE_ENV is "development"', () => {
		expect(IS_TEST).toBe(false);
	});
});
