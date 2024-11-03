describe('hasDependency()', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let consoleError: Console['error'] | null = null;
	let hasDependency: ((pkg: string) => boolean) | null = null;

	beforeAll(async () => {
		__dirname = dirname(import.meta.url);

		consoleError = console.error;
		console.error = jest.fn();

		processEnv = process.env;

		Object.defineProperties(process.env, {
			PACKAGE_JSON: {
				get: jest.fn()
					.mockReturnValueOnce(`${__dirname}/__test__/dependencies.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/devDependencies.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/optionalDependencies.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/peerDependencies.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/bundledDependencies.package.json`)
					.mockReturnValueOnce(`${__dirname}/__test__/nottest.package.json`)
					.mockReturnValue(`${__dirname}/__test__/undefined.package.json`),
			},
		});
	});

	beforeEach(async () => {
		({ hasDependency } = await import('./hasDependency'));
	});

	afterEach(() => {
		jest.resetModules();
		jest.clearAllMocks();

		hasDependency = null
	});

	afterAll(() => {
		__dirname = null;
		console.error = consoleError as Console['error'];
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should return true given a project package.json file with the "test" package in the "dependencies" field', () => {
		expect(hasDependency?.('test')).toBe(true);
	});

	it('should return true given a project package.json file with the "test" package in the "devDependencies" field', () => {
		expect(hasDependency?.('test')).toBe(true);
	});

	it('should return true given a project package.json file with the "test" package in the "optionalDependencies" field', () => {
		expect(hasDependency?.('test')).toBe(true);
	});

	it('should return true given a project package.json file with the "test" package in the "peerDependencies" field', () => {
		expect(hasDependency?.('test')).toBe(true);
	});

	it('should return false given a project package.json file with the "test" package in the "bundledDependencies" field', () => {
		expect(hasDependency?.('test')).toBe(false);
	});

	it('should return false given a project package.json file without the "test" package in any dependency list field', () => {
		expect(hasDependency?.('test')).toBe(false);
	});

	it('should return false given no project package.json file', () => {
		expect(() => hasDependency?.('test')).not.toThrow(expect.any(Error));
		expect(hasDependency?.('test')).toBe(false);
	});
});
