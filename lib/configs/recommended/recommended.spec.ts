import { Linter } from 'eslint';
import { lintFixtureFile } from '@@/utils/misc/lint';
import { mockWithPlugin } from './__test__';
import recommended from './recommended';

// console.log(recommended);

jest.mock('@/index', () => Promise.resolve({
	meta: {
		name: 'test',
		version: '1.0.0',
	},
	rules: {},
	configs: {
		recommended,
	},
	processors: {},
}));

describe('plugin:@rob.hameetman/eslint-plugin/recommended', () => {
	let processEnv: NodeJS.ProcessEnv | null = null;
	let config: Linter.FlatConfigArray | null = null;
	let error: Error | null = null;
	let result: Record<string, unknown> | null = null;

	beforeAll(() => {
		processEnv = process.env;

		Object.defineProperties(process.env, {
			PACKAGE_JSON: {
				get: jest.fn()
					.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/vanilla/package.json`)
					.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/react/package.json`)
					.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/ts/package.json`)
					.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/gql/package.json`)
					.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/tsreact/package.json`)
					.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/cypress/package.json`)
					.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/jest/package.json`)
					.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/testinglib/package.json`)
					.mockReturnValueOnce(`${process.cwd()}/test/resources/fixtures/all/package.json`)
					.mockReturnValue(undefined)
			},
		});
	});

	beforeEach(async () => {
		({ config, error, result } = await lintFixtureFile(mockWithPlugin(recommended)));
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

	// it('should include only 1 override when linting vanilla JS projects', async () => {
	// 	expect(result).toHaveOverrides(1);
	// 	expect(result).toHaveOverride('allow-default-exports');
	// });

	// it('should include rules for JSX when linting React projects', async () => {
	// 	expect(await lintFixtureFile()).not.toThrowError();
	// 	expect((await lintFixtureFile())()).toFindViolations();

	// 	expect((await lintFixtureFile())()).toHaveOverride('react');
	// });

	// it('should include unconflicting rules when linting TypeScript projects', async () => {
	// 	expect(await lintFixtureFile()).not.toThrowError();
	// 	expect((await lintFixtureFile())()).toFindViolations();

	// 	expect((await lintFixtureFile())()).toHaveOverride('typescript');
	// });

	// it('should include query and mutation rules when linting GraphQL projects', async () => {
	// 	expect(await lintFixtureFile()).not.toThrowError();
	// 	expect((await lintFixtureFile())()).toFindViolations();

	// 	expect((await lintFixtureFile())()).toHaveOverride('graphql');
	// });

	// it('should include unconflicting JSX rules when linting TypeScript React projects', async () => {
	// 	expect(await lintFixtureFile()).not.toThrowError();
	// 	expect((await lintFixtureFile())()).toFindViolations();

	// 	expect((await lintFixtureFile())()).toHaveOverride('typescript');
	// 	expect((await lintFixtureFile())()).toHaveOverride('react');
	// });

	// it('should include unconflicting test rules when linting Cypress projects', async () => {
	// 	expect(await lintFixtureFile()).not.toThrowError();
	// 	expect((await lintFixtureFile())()).toFindViolations();

	// 	expect((await lintFixtureFile())()).toHaveOverride('cypress');
	// });

	// it('should include only Jest plugin rules when linting Jest projects without @testing-library', async () => {
	// 	expect(await lintFixtureFile()).not.toThrowError();
	// 	expect((await lintFixtureFile())()).toFindViolations();

	// 	expect((await lintFixtureFile())()).toHaveOverride('jest');
	// 	expect((await lintFixtureFile())()).not.toHaveOverride('testing-library');
	// });

	// it('should include Jest and testing-library plugin rules when linting Jest projects with @testing-library', async () => {
	// 	expect(await lintFixtureFile()).not.toThrowError();
	// 	expect((await lintFixtureFile())()).toFindViolations();

	// 	expect((await lintFixtureFile())()).toHaveOverride('jest');
	// 	expect((await lintFixtureFile())()).toHaveOverride('testing-library');
	// });

	// it('should include all rules when linting frontend web app projects', async () => {
	// 	expect(await lintFixtureFile()).not.toThrowError();
	// 	expect((await lintFixtureFile())()).toFindViolations();

	// 	expect((await lintFixtureFile())()).toHaveOverride('allow-default-exports');
	// 	expect((await lintFixtureFile())()).toHaveOverride('typescript');
	// 	expect((await lintFixtureFile())()).toHaveOverride('react');
	// 	expect((await lintFixtureFile())()).toHaveOverride('jest');
	// 	expect((await lintFixtureFile())()).toHaveOverride('cypress');
	// 	expect((await lintFixtureFile())()).toHaveOverride('graphql');
	// });

	// it('should yield warning and error messages when linting files with violations', async () => {
	// 	expect((await lintFixtureFile())()).toStrictEqual(expect.objectContaining({
	// 		messages: expect.arrayContaining([
	// 			expect.objectContaining({
	// 				message: expect.any(String),
	// 				ruleId: expect.any(String),
	// 			}),
	// 		]),
	// 	}));
	// });

	// it('should yield warning and error messages when linting files with violations', async () => {
	// 	expect(index).toBe(1);
	// 	expect((await lintFixtureFile())()).toFindViolations();
	// });
});
