describe('USING_PRETTIER', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let USING_PRETTIER: unknown = null;

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
		({ USING_PRETTIER } = await import('./USING_PRETTIER'));
	});

	afterEach(() => {
		jest.resetModules();
		USING_PRETTIER = null;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given a package.json with prettier as a dev dependency', async () => {
		await expect(USING_PRETTIER).toBe(true);
	});

	it('should be false given a package.json without prettier as a dev dependency', async () => {
		await expect(USING_PRETTIER).toBe(false);
	});
});
