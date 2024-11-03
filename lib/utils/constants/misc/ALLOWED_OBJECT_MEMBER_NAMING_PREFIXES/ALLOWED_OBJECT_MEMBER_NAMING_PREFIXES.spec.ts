describe('ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES', () => {
	let ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES: ReadonlyArray<unknown> | null = null;
	let ALWAYS_ALLOWED_NAMING_PREFIXES: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;

	beforeAll(() => {
		processEnv = process.env;

		ALWAYS_ALLOWED_NAMING_PREFIXES = 'test,mock';

		Object.defineProperties(process.env, {
			ESLINT_ALLOWED_NAMING_PREFIXES: {
				get: jest.fn()
					.mockReturnValueOnce(ALWAYS_ALLOWED_NAMING_PREFIXES)
					.mockReturnValueOnce(ALWAYS_ALLOWED_NAMING_PREFIXES)
					.mockReturnValueOnce(ALWAYS_ALLOWED_NAMING_PREFIXES)
					.mockReturnValue(undefined)
			},
			ESLINT_ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES: {
				get: jest.fn()
					.mockReturnValueOnce('$,@')
					.mockReturnValueOnce('$,@')
					.mockReturnValueOnce('$|@')
					.mockReturnValue(undefined)
			},
			ESLINT_ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES_DELIMITER: {
				get: jest.fn()
					.mockReturnValueOnce(undefined)
					.mockReturnValueOnce(undefined)
					.mockReturnValueOnce('|')
					.mockReturnValue(undefined)
			}
		});
	});

	beforeEach(async () => {
		({ ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES } = await import('./ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES'));
	});

	afterEach(() => {
		jest.resetModules();
		ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES = null;
		ALWAYS_ALLOWED_NAMING_PREFIXES = null;
	});

	afterAll(() => {
		process.env = processEnv as NodeJS.ProcessEnv;
		processEnv = null;
	});

	it('should be an array of values provided by process.env.ESLINT_ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES', () => {
		expect(ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES).toBeInstanceOf(Array);
		expect(ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES).not.toHaveLength(0);
		expect(ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES).toContain('$');
		expect(ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES).toContain('@');
	});

	it('should be include the values provided by process.env.ESLINT_ALWAYS_ALLOWED_NAMING_PREFIXES', () => {
		expect(ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES).toStrictEqual(expect.arrayContaining(ALWAYS_ALLOWED_NAMING_PREFIXES?.split(',') || []));
		expect(ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES?.length).toBeGreaterThan(ALWAYS_ALLOWED_NAMING_PREFIXES?.length || 0);
	});

	it('should work given a custom delimiter via process.env.ESLINT_ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES_DELIMITER', () => {
		expect(ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES).toBeInstanceOf(Array);
		expect(ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES).not.toHaveLength(0);
		expect(ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES).toContain('$');
		expect(ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES).toContain('@');
	});

	it('should be an empty array when process.env.ESLINT_ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES is undefined', () => {
		expect(ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES).toBeInstanceOf(Array);
		expect(ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES).toHaveLength(0);
	});
});

