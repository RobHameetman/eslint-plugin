describe('USING_TESTING_LIBRARY', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let USING_TESTING_LIBRARY: unknown = null;

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
		({ USING_TESTING_LIBRARY } = await import('./USING_TESTING_LIBRARY'));
	});

	afterEach(() => {
		jest.resetModules();
		USING_TESTING_LIBRARY = null;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given a package.json with @testing-library package as a dev dependency', async () => {
		await expect(USING_TESTING_LIBRARY).toBe(true);
	});

	it('should be false given a package.json without @testing-library package as a dev dependency', async () => {
		await expect(USING_TESTING_LIBRARY).toBe(false);
	});
});
