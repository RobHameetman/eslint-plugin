describe('USING_JEST', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let USING_JEST: unknown = null;

	beforeAll(async () => {
		__dirname = dirname(import.meta.url);
		processEnv = process.env;

		Object.defineProperties(process.env, {
			PACKAGE_JSON: {
				get: jest.fn()
					.mockReturnValueOnce(`${__dirname}/__test__/true.package.json`)
					.mockReturnValue(`${__dirname}/__test__/false.package.json`),
			},
		});
	});

	beforeEach(async () => {
		({ USING_JEST } = await import('./USING_JEST'));
	});

	afterEach(() => {
		jest.resetModules();
		USING_JEST = null;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given a package.json with jest as a dev dependency', async () => {
		await expect(USING_JEST).toBe(true);
	});

	it('should be false given a package.json without jest as a dev dependency', async () => {
		await expect(USING_JEST).toBe(false);
	});
});
