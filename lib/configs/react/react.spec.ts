import { Linter } from 'eslint';
import { lintFixtureFile } from '@@/utils/misc/lint';
import react from './react';

describe(`plugin:${process.env.npm_package_name}/react`, () => {
	let processEnv: NodeJS.ProcessEnv | null = null;
	let configs: Linter.FlatConfigArray | null = null;
	let error: Error | null = null;
	let result: Record<string, unknown> | null = null;

	beforeAll(() => {
		processEnv = process.env;

		Object.defineProperties(process.env, {
			PACKAGE_JSON: {
				get: jest.fn()
					.mockReturnValue(`${process.cwd()}/test/resources/fixtures/react/package.json`)
			},
		});
	});

	beforeEach(async () => {
		({ configs, error, result } = await lintFixtureFile(react));
	}, Number(process.env.CONFIG_TEST_TIMEOUT));

	afterEach(() => {
		jest.resetModules();
		jest.clearAllMocks();

		configs = null;
		error = null;
		result = null;
	});

	afterAll(() => {
		jest.restoreAllMocks();

		process.env = processEnv as NodeJS.ProcessEnv;
		processEnv = null;
	});

	it('should not throw an error', async () => {
		await expect(error).toBeNull();
	});

	it('should avoid any removed rules', async () => {
		await expect(configs).toAvoidRemovedRules();
	});
});
