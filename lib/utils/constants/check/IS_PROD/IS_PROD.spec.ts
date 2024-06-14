describe('IS_PROD', () => {
	let IS_PROD: unknown = null;

	beforeAll(() => {
		Object.defineProperties(process.env, {
			NODE_ENV: {
				get: jest.fn()
					.mockReturnValueOnce('production')
					.mockReturnValueOnce('development')
					.mockReturnValue('test')
			}
		});
	});

	beforeEach(async () => {
		({ IS_PROD } = await import('./IS_PROD'));
	});

	afterEach(() => {
		jest.resetModules();
		IS_PROD = null;
	});

	it('should be true when NODE_ENV is "production"', () => {
		expect(IS_PROD).toBe(true);
	});

	it('should be false when NODE_ENV is "development"', () => {
		expect(IS_PROD).toBe(false);
	});

	it('should be false when NODE_ENV is "test"', () => {
		expect(IS_PROD).toBe(false);
	});
});
