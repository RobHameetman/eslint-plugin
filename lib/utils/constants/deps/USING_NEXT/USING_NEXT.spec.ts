describe('USING_NEXT', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let USING_NEXT: unknown = null;

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
		({ USING_NEXT } = await import('./USING_NEXT'));
	});

	afterEach(() => {
		jest.resetModules();
		USING_NEXT = null;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given a package.json with next as a dependency', async () => {
		await expect(USING_NEXT).toBe(true);
	});

	it('should be false given a package.json without next as a dependency', async () => {
		await expect(USING_NEXT).toBe(false);
	});
});
