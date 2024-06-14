describe('USING_TESTING_LIBRARY_REACT', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let USING_TESTING_LIBRARY_REACT: unknown = null;

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
		({ USING_TESTING_LIBRARY_REACT } = await import('./USING_TESTING_LIBRARY_REACT'));
	});

	afterEach(() => {
		jest.resetModules();
		USING_TESTING_LIBRARY_REACT = null;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given a package.json with @testing-library/react as a dev dependency', async () => {
		await expect(USING_TESTING_LIBRARY_REACT).toBe(true);
	});

	it('should be false given a package.json without @testing-library/react as a dev dependency', async () => {
		await expect(USING_TESTING_LIBRARY_REACT).toBe(false);
	});
});
