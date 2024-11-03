describe('USING_REACT', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let USING_REACT: unknown = null;

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
		({ USING_REACT } = await import('./USING_REACT'));
	});

	afterEach(() => {
		jest.resetModules();
		USING_REACT = null;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given a package.json with react as a dependency', async () => {
		await expect(USING_REACT).toBe(true);
	});

	it('should be false given a package.json without react as a dependency', async () => {
		await expect(USING_REACT).toBe(false);
	});
});
