describe('ALLOWED_TYPE_NAMING_PREFIXES', () => {
	let ALLOWED_TYPE_NAMING_PREFIXES: unknown = null;
	let processEnv: NodeJS.ProcessEnv | null = null;

	beforeAll(() => {
		processEnv = process.env;

		Object.defineProperties(process.env, {
			ESLINT_ALLOWED_TYPE_NAMING_PREFIXES: {
				get: jest.fn()
					.mockReturnValueOnce('test,mock,$')
					.mockReturnValueOnce('test|mock|$')
					.mockReturnValue(undefined)
			},
			ESLINT_ALLOWED_TYPE_NAMING_PREFIXES_DELIMITER: {
				get: jest.fn()
					.mockReturnValueOnce(undefined)
					.mockReturnValueOnce('|')
					.mockReturnValue(undefined)
			}
		});
	});

	beforeEach(async () => {
		({ ALLOWED_TYPE_NAMING_PREFIXES } = await import('./ALLOWED_TYPE_NAMING_PREFIXES'));
	});

	afterEach(() => {
		jest.resetModules();
		ALLOWED_TYPE_NAMING_PREFIXES = null;
	});

	afterAll(() => {
		process.env = processEnv as NodeJS.ProcessEnv;
		processEnv = null;
	});

	it('should be an array of values provided by process.env.ESLINT_ALLOWED_TYPE_NAMING_PREFIXES', () => {
		expect(ALLOWED_TYPE_NAMING_PREFIXES).toBeInstanceOf(Array);
		expect(ALLOWED_TYPE_NAMING_PREFIXES).not.toHaveLength(0);
		expect(ALLOWED_TYPE_NAMING_PREFIXES).toContain('test');
		expect(ALLOWED_TYPE_NAMING_PREFIXES).toContain('mock');
		expect(ALLOWED_TYPE_NAMING_PREFIXES).toContain('$');
	});

	it('should work given a custom delimiter via process.env.ESLINT_ALLOWED_TYPE_NAMING_PREFIXES_DELIMITER', () => {
		expect(ALLOWED_TYPE_NAMING_PREFIXES).toBeInstanceOf(Array);
		expect(ALLOWED_TYPE_NAMING_PREFIXES).not.toHaveLength(0);
		expect(ALLOWED_TYPE_NAMING_PREFIXES).toContain('test');
		expect(ALLOWED_TYPE_NAMING_PREFIXES).toContain('mock');
		expect(ALLOWED_TYPE_NAMING_PREFIXES).toContain('$');
	});

	it('should be an empty array when process.env.ESLINT_ALLOWED_TYPE_NAMING_PREFIXES is undefined', () => {
		expect(ALLOWED_TYPE_NAMING_PREFIXES).toBeInstanceOf(Array);
		expect(ALLOWED_TYPE_NAMING_PREFIXES).toHaveLength(0);
	});
});

