describe('IS_MODULE', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let IS_MODULE: unknown = null;

	beforeAll(async () => {
		__dirname = dirname(import.meta.url);
		processEnv = process.env;

		Object.defineProperties(process.env, {
			PACKAGE_JSON: {
				get: jest.fn()
					.mockReturnValueOnce(`${__dirname}/__test__/esm.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/esm.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/esm.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/cjs.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/cjs.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/cjs.package.json`)
					.mockReturnValue(`${__dirname}/__test__/none.package.json`),
			},
		});

		Object.defineProperties(process.env, {
			TSCONFIG_JSON: {
				get: jest.fn()
					.mockReturnValueOnce(`${__dirname}/__test__/esnext.tsconfig.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/cjs.tsconfig.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/none.tsconfig.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/esnext.tsconfig.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/cjs.tsconfig.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/none.tsconfig.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/esnext.tsconfig.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/cjs.tsconfig.json`)
					.mockReturnValue(`${__dirname}/__test__/none.tsconfig.json`),
			},
		});
	});

	beforeEach(async () => {
		({ IS_MODULE } = await import('./IS_MODULE'));
	});

	afterEach(() => {
		jest.resetModules();
		IS_MODULE = null;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given a package.json with type "module" and a tsconfig.json with a module value of "esnext"', async () => {
		await expect(IS_MODULE).toBe(true);
	});

	it('should be true given a package.json with type "module" and a tsconfig.json with a module value of "commonjs"', async () => {
		await expect(IS_MODULE).toBe(true);
	});

	it('should be true given a package.json with type "module" and a tsconfig.json with no explicit module value', async () => {
		await expect(IS_MODULE).toBe(true);
	});

	it('should be false given a package.json with type "commonjs" and a tsconfig.json with a module value of "esnext"', async () => {
		await expect(IS_MODULE).toBe(false);
	});

	it('should be false given a package.json with type "commonjs" and a tsconfig.json with a module value of "commonjs"', async () => {
		await expect(IS_MODULE).toBe(false);
	});

	it('should be false given a package.json with type "commonjs" and a tsconfig.json with no explicit module value', async () => {
		await expect(IS_MODULE).toBe(false);
	});

	// it('should be false given a package.json with type "commonjs"', async () => {
	// 	await expect(IS_MODULE).toBe(false);
	// });

	it('should be true given a package.json with no explicit type and a tsconfig.json with a module value of "esnext"', async () => {
		await expect(IS_MODULE).toBe(true);
	});

	it('should be false given a package.json with no explicit type and a tsconfig.json with a module value of "commonjs"', async () => {
		await expect(IS_MODULE).toBe(false);
	});

	it('should be true given a package.json with no explicit type and a tsconfig.json with no explicit module value', async () => {
		await expect(IS_MODULE).toBe(true);
	});

	// it('should be false given a package.json with no explicit type', async () => {
	// 	await expect(IS_MODULE).toBe(false);
	// });
});
