import { Linter } from 'eslint';
import { lintFixtureFile } from '@@/utils/misc/lint';
import core from './core';

describe(`plugin:${process.env.npm_package_name}/core`, () => {
	let processEnv: NodeJS.ProcessEnv | null = null;
	let config: Linter.FlatConfigArray | null = null;
	let error: Error | null = null;
	let result: Record<string, unknown> | null = null;

	beforeAll(() => {
		processEnv = process.env;

		Object.defineProperties(process.env, {
			PACKAGE_JSON: {
				get: jest.fn()
					.mockReturnValue(`${process.cwd()}/test/resources/fixtures/vanilla/package.json`)
			},
		});
	});

	beforeEach(async () => {
		({ config, error, result } = await lintFixtureFile(core));
	}, Number(process.env.CONFIG_TEST_TIMEOUT));

	afterEach(() => {
		jest.resetModules();
		jest.clearAllMocks();

		config = null;
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
		await expect(config).toAvoidRemovedRules();
	});
});
