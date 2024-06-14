describe('PACKAGE_JSON', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let PACKAGE_JSON: unknown = null;

	beforeAll(async () => {
		__dirname = dirname(import.meta.url);
		processEnv = process.env;

		Object.defineProperties(process.env, {
			PACKAGE_JSON: {
				get: jest.fn()
					.mockReturnValue(`${__dirname}/__test__/package.json`),
			},
		});
	});

	beforeEach(async () => {
		({ PACKAGE_JSON } = await import('./PACKAGE_JSON'));
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should import the project package.json file', () => {
		expect(PACKAGE_JSON).toStrictEqual(expect.objectContaining({
			name: '@test/project',
			version: '1.0.0',
		}));
	});
});
