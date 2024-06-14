describe('USING_SERVICE_WORKER', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let USING_SERVICE_WORKER: unknown = null;

	beforeAll(async () => {
		__dirname = dirname(import.meta.url);
		processEnv = process.env;

		Object.defineProperties(process.env, {
			PACKAGE_JSON: {
				get: jest.fn()
					.mockReturnValueOnce(`${__dirname}/__test__/workbox-webpack-plugin.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/serviceworker-webpack-plugin.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/service-worker-mock.package.json`)
					.mockReturnValue(`${__dirname}/__test__/false.package.json`),
			},
		});
	});

	beforeEach(async () => {
		({ USING_SERVICE_WORKER } = await import('./USING_SERVICE_WORKER'));
	});

	afterEach(() => {
		jest.resetModules();
		USING_SERVICE_WORKER = null;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given a package.json with workbox-webpack-plugin as a dev dependency', async () => {
		await expect(USING_SERVICE_WORKER).toBe(true);
	});

	it('should be true given a package.json with serviceworker-webpack-plugin as a dev dependency', async () => {
		await expect(USING_SERVICE_WORKER).toBe(true);
	});

	it('should be true given a package.json with service-worker-mock as a dev dependency', async () => {
		await expect(USING_SERVICE_WORKER).toBe(true);
	});

	it('should be false given a package.json without any service worker packages as a dependency', async () => {
		await expect(USING_SERVICE_WORKER).toBe(false);
	});
});
