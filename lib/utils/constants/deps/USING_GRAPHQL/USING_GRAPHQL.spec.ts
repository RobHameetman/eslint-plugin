describe('USING_GRAPHQL', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let USING_GRAPHQL: unknown = null;

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
		({ USING_GRAPHQL } = await import('./USING_GRAPHQL'));
	});

	afterEach(() => {
		jest.resetModules();
		USING_GRAPHQL = null;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given a package.json with graphql as a dependency', async () => {
		await expect(USING_GRAPHQL).toBe(true);
	});

	it('should be false given a package.json without graphql as a dependency', async () => {
		await expect(USING_GRAPHQL).toBe(false);
	});
});
