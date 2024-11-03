describe('TSCONFIG_JSON', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let TSCONFIG_JSON: unknown = null;

	beforeAll(async () => {
		__dirname = dirname(import.meta.url);
		processEnv = process.env;

		Object.defineProperties(process.env, {
			TSCONFIG_JSON: {
				get: jest.fn()
					.mockReturnValue(`${__dirname}/__test__/tsconfig.json`),
			},
		});
	});

	beforeEach(async () => {
		({ TSCONFIG_JSON } = await import('./TSCONFIG_JSON'));
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should import the project tsconfig.json file', () => {
		expect(TSCONFIG_JSON).toStrictEqual(expect.objectContaining({
			compilerOptions: expect.any(Object),
		}));
	});
});
