import { onTest } from '@test/utils/misc/onTest';
import { lintFixtureFile } from './__test__';

/**
 * @TODO: Unskip this test. Skip is currently failing due to an error in which
 * the "plugin:@typescript-eslint/recommended" config is not being loaded, though
 * the plugin itself is being loaded. If you comment out this config, the test
 * will still fail because the "jest" and "testing-library" plugins are also
 * failing to load.
 */
describe.skip('plugin:@rob.hameetman/recommended', () => {
	let index = 1;

	beforeEach(() => {
		onTest(index, {
			1: () => {
				process.env.PACKAGE_JSON = `${process.cwd()}/test/resources/fixtures/vanilla/package.json`;
			},
			2: () => {
				process.env.PACKAGE_JSON = `${process.cwd()}/test/resources/fixtures/react/package.json`;
			},
			3: () => {
				process.env.PACKAGE_JSON = `${process.cwd()}/test/resources/fixtures/ts/package.json`;
			},
			4: () => {
				process.env.PACKAGE_JSON = `${process.cwd()}/test/resources/fixtures/gql/package.json`;
			},
			5: () => {
				process.env.PACKAGE_JSON = `${process.cwd()}/test/resources/fixtures/tsreact/package.json`;
			},
			6: () => {
				process.env.PACKAGE_JSON = `${process.cwd()}/test/resources/fixtures/cypress/package.json`;
			},
			7: () => {
				process.env.PACKAGE_JSON = `${process.cwd()}/test/resources/fixtures/jest/package.json`;
			},
			8: () => {
				process.env.PACKAGE_JSON = `${process.cwd()}/test/resources/fixtures/testinglib/package.json`;
			},
			9: () => {
				process.env.PACKAGE_JSON = `${process.cwd()}/test/resources/fixtures/all/package.json`;
			}
		});
	});

	afterEach(() => {
		delete process.env.PACKAGE_JSON;
		index++;
	});

	it('should include only 1 override when linting vanilla JS projects', async () => {
		expect(index).toBe(1);
		expect(await lintFixtureFile()).not.toThrowError();
		expect((await lintFixtureFile())()).toFindViolations();

		expect((await lintFixtureFile())()).toHaveOverrides(1);
		expect((await lintFixtureFile())()).toHaveOverride('allow-default-exports');
	});

	it('should include rules for JSX when linting React projects', async () => {
		expect(index).toBe(2);
		expect(await lintFixtureFile()).not.toThrowError();
		expect((await lintFixtureFile())()).toFindViolations();

		expect((await lintFixtureFile())()).toHaveOverride('react');
	});

	it('should include unconflicting rules when linting TypeScript projects', async () => {
		expect(index).toBe(3);
		expect(await lintFixtureFile()).not.toThrowError();
		expect((await lintFixtureFile())()).toFindViolations();

		expect((await lintFixtureFile())()).toHaveOverride('typescript');
	});

	it('should include query and mutation rules when linting GraphQL projects', async () => {
		expect(index).toBe(4);
		expect(await lintFixtureFile()).not.toThrowError();
		expect((await lintFixtureFile())()).toFindViolations();

		expect((await lintFixtureFile())()).toHaveOverride('graphql');
	});

	it('should include unconflicting JSX rules when linting TypeScript React projects', async () => {
		expect(index).toBe(5);
		expect(await lintFixtureFile()).not.toThrowError();
		expect((await lintFixtureFile())()).toFindViolations();

		expect((await lintFixtureFile())()).toHaveOverride('typescript');
		expect((await lintFixtureFile())()).toHaveOverride('react');
	});

	it('should include unconflicting test rules when linting Cypress projects', async () => {
		expect(index).toBe(6);
		expect(await lintFixtureFile()).not.toThrowError();
		expect((await lintFixtureFile())()).toFindViolations();

		expect((await lintFixtureFile())()).toHaveOverride('cypress');
	});

	it('should include only Jest plugin rules when linting Jest projects without @testing-library', async () => {
		expect(index).toBe(7);
		expect(await lintFixtureFile()).not.toThrowError();
		expect((await lintFixtureFile())()).toFindViolations();

		expect((await lintFixtureFile())()).toHaveOverride('jest');
		expect((await lintFixtureFile())()).not.toHaveOverride('testing-library');
	});

	it('should include Jest and testing-library plugin rules when linting Jest projects with @testing-library', async () => {
		expect(index).toBe(8);
		expect(await lintFixtureFile()).not.toThrowError();
		expect((await lintFixtureFile())()).toFindViolations();

		expect((await lintFixtureFile())()).toHaveOverride('jest');
		expect((await lintFixtureFile())()).toHaveOverride('testing-library');
	});

	it('should include all rules when linting frontend web app projects', async () => {
		expect(index).toBe(9);
		expect(await lintFixtureFile()).not.toThrowError();
		expect((await lintFixtureFile())()).toFindViolations();

		expect((await lintFixtureFile())()).toHaveOverride('allow-default-exports');
		expect((await lintFixtureFile())()).toHaveOverride('typescript');
		expect((await lintFixtureFile())()).toHaveOverride('react');
		expect((await lintFixtureFile())()).toHaveOverride('jest');
		expect((await lintFixtureFile())()).toHaveOverride('cypress');
		expect((await lintFixtureFile())()).toHaveOverride('graphql');
	});

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
