describe('IS_BROWSER', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let IS_BROWSER: unknown = null;

	beforeAll(async () => {
		__dirname = dirname(import.meta.url);
		processEnv = process.env;

		Object.defineProperties(process.env, {
			PACKAGE_JSON: {
				get: jest.fn()
					.mockReturnValueOnce(`${__dirname}/__test__/cypress.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/graphql.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/react.package.json`)
					.mockReturnValue(`${__dirname}/__test__/false.package.json`),
			},
		});
	});

	beforeEach(async () => {
		({ IS_BROWSER } = await import('./IS_BROWSER'));
	});

	afterEach(() => {
		jest.resetModules();
		IS_BROWSER = null;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given a package.json with cypress as a dev dependency', async () => {
		await expect(IS_BROWSER).toBe(true);
	});

	it('should be true given a package.json with graphql as a dependency', async () => {
		await expect(IS_BROWSER).toBe(true);
	});

	it('should be true given a package.json with react as a dependency', async () => {
		await expect(IS_BROWSER).toBe(true);
	});

	it('should be false given a package.json without any browser-related packages as a dependency', async () => {
		await expect(IS_BROWSER).toBe(false);
	});
});
