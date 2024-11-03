describe('USING_TAILWIND', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let USING_TAILWIND: unknown = null;

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
		({ USING_TAILWIND } = await import('./USING_TAILWIND'));
	});

	afterEach(() => {
		jest.resetModules();
		USING_TAILWIND = null;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given a package.json with tailwindcss as a dependency', async () => {
		await expect(USING_TAILWIND).toBe(true);
	});

	it('should be false given a package.json without tailwindcss as a dependency', async () => {
		await expect(USING_TAILWIND).toBe(false);
	});
});
