import { Linter } from 'eslint';
import { lintFixtureFile } from '@@/utils/misc/lint';
import { mockEnv } from '@@/utils/misc/mockEnv';
import jestConfig from './jest';

describe(`plugin:${process.env.npm_package_name}/jest`, () => {
	let processEnv: NodeJS.ProcessEnv | null = null;
	let configs: Linter.FlatConfigArray | null = null;
	let error: Error | null = null;
	let result: Record<string, unknown> | null = null;

	beforeAll(() => {
		processEnv = process.env;

		mockEnv('PACKAGE_JSON')
			.mockReturnValue(`${process.cwd()}/test/resources/fixtures/jest/package.json`);
	});

	beforeEach(async () => {
		({ configs, error, result } = await lintFixtureFile(jestConfig));
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
