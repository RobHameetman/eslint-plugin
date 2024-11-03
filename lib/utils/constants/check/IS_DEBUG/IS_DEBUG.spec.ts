describe('IS_DEBUG', () => {
	let processEnv: NodeJS.ProcessEnv | null = null;
	let IS_DEBUG: unknown = null;

	beforeAll(() => {
		processEnv = process.env;

		Object.defineProperties(process.env, {
			DEBUG: {
				get: jest.fn()
					.mockReturnValueOnce('eslint:code-path')
					.mockReturnValueOnce('eslint:*')
					.mockReturnValueOnce('*')
					.mockReturnValueOnce('true')
					.mockReturnValueOnce('semantic-release:*')
					.mockReturnValueOnce('false')
					.mockReturnValue(undefined)
			}
		});
	});

	beforeEach(async () => {
		({ IS_DEBUG } = await import('./IS_DEBUG'));
	});

	afterEach(() => {
		jest.resetModules();
		IS_DEBUG = null;
	});

	afterAll(() => {
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given the eslint "code-path" routine', () => {
		expect(IS_DEBUG).toBe(true);
	});

	it('should be true given any eslint routine', () => {
		expect(IS_DEBUG).toBe(true);
	});

	it('should be true given any routine', () => {
		expect(IS_DEBUG).toBe(true);
	});

	it('should be true given "true"', () => {
		expect(IS_DEBUG).toBe(true);
	});

	it('should be false given no eslint routine', () => {
		expect(IS_DEBUG).toBe(false);
	});

	it('should be false given no "false"', () => {
		expect(IS_DEBUG).toBe(false);
	});

	it('should be false when process.env.IS_DEBUG is undefined', () => {
		expect(IS_DEBUG).toBe(false);
	});
});

