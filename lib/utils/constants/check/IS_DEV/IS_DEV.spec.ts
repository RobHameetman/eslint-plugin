describe('IS_DEV', () => {
	let IS_DEV: unknown = null;

	beforeAll(() => {
		Object.defineProperties(process.env, {
			NODE_ENV: {
				get: jest.fn()
					.mockReturnValueOnce('development')
					.mockReturnValueOnce('production')
					.mockReturnValue('test')
			}
		});
	});

	beforeEach(async () => {
		({ IS_DEV } = await import('./IS_DEV'));
	});

	afterEach(() => {
		jest.resetModules();
		IS_DEV = null;
	});

	it('should be true when NODE_ENV is "development"', () => {
		expect(IS_DEV).toBe(true);
	});

	it('should be false when NODE_ENV is "production"', () => {
		expect(IS_DEV).toBe(false);
	});

	it('should be false when NODE_ENV is "test"', () => {
		expect(IS_DEV).toBe(false);
	});
});
