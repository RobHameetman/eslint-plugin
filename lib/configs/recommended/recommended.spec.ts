import { jest } from '@jest/globals';
import { Linter } from 'eslint';
import { lintFixtureFile } from '@@/utils/misc/lint';
import { mockEnv } from '@@/utils/misc/mockEnv';
import { mockWithPlugin } from './__test__';

jest.unstable_mockModule('@/index', () => ({
	meta: {
		name: 'test',
		version: '1.0.0',
	},
	rules: {},
	configs: {},
	processors: {},
}));

describe('plugin:@rob.hameetman/eslint-plugin/recommended', () => {
	let processEnv: NodeJS.ProcessEnv | null = null;
	let configs: Linter.FlatConfigArray | null = null;
	let error: Error | null = null;
	let result: Record<string, unknown> | null = null;

	beforeAll(() => {
		processEnv = process.env;

		mockEnv('PACKAGE_JSON')
			.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/vanilla/package.json`)
			.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/react/package.json`)
			.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/ts/package.json`)
			.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/gql/package.json`)
			.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/tsreact/package.json`)
			.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/cypress/package.json`)
			.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/jest/package.json`)
			.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/testinglib/package.json`)
			.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/all/package.json`)
			.mockReturnValue(undefined);
	});

	beforeEach(async () => {
		const recommended = (await import('./recommended')).default;

		({ configs, error, result } = await lintFixtureFile(mockWithPlugin(recommended)));
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

	it('should include core rules when linting JavaScript projects', async () => {
		await expect(error).toBeNull();
		await expect(result).toFindViolations();
		await expect(configs).toHaveConfig('core');
	});

	it.skip('should include rules for JSX when linting React projects', async () => {
		await expect(error).toBeNull();
		await expect(result).toFindViolations();
		await expect(configs).toHaveConfig('react');
	});

	it.skip('should include unconflicting rules when linting TypeScript projects', async () => {
		await expect(error).toBeNull();
		await expect(result).toFindViolations();
		await expect(configs).toHaveConfig('typescript');
	});

	it.skip('should include query and mutation rules when linting GraphQL projects', async () => {
		await expect(error).toBeNull();
		await expect(result).toFindViolations();
		await expect(configs).toHaveConfig('graphql');
	});

	it.skip('should include unconflicting JSX rules when linting TypeScript React projects', async () => {
		await expect(error).toBeNull();
		await expect(result).toFindViolations();
		await expect(configs).toHaveConfig('typescript');
		await expect(configs).toHaveConfig('react');
	});

	it.skip('should include unconflicting test rules when linting Cypress projects', async () => {
		await expect(error).toBeNull();
		await expect(result).toFindViolations();
		await expect(configs).toHaveConfig('cypress');
	});

	it.skip('should include only Jest plugin rules when linting Jest projects without @testing-library', async () => {
		await expect(error).toBeNull();
		await expect(result).toFindViolations();
		await expect(configs).toHaveConfig('jest');
		await expect(configs).not.toHavePlugin('testing-library');
	});

	it.skip('should include Jest and testing-library plugin rules when linting Jest projects with @testing-library', async () => {
		await expect(error).toBeNull();
		await expect(result).toFindViolations();
		await expect(configs).toHaveConfig('jest');
		await expect(configs).toHavePlugin('testing-library');
	});

	it.skip('should include all rules when linting frontend web app projects', async () => {
		await expect(error).toBeNull();
		await expect(result).toFindViolations();

		await expect(configs).toHaveConfig('typescript');
		await expect(configs).toHaveConfig('react');
		await expect(configs).toHaveConfig('jest');
		await expect(configs).toHaveConfig('cypress');
		await expect(configs).toHaveConfig('graphql');
	});

	it.skip('should yield warning and error messages when linting files with violations', async () => {
		await expect(error).toBeNull();
		await expect(result).toStrictEqual(expect.arrayContaining([
				expect.objectContaining({
					message: expect.any(String),
					ruleId: expect.any(String),
				}),
			]));
	});

	it.skip('should yield warning and error messages when linting files with violations', async () => {
		await expect(error).toBeNull();
		await expect(result).toFindViolations();
	});
});
