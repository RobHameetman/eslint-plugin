import { mockEnv } from '@@/utils/misc/mockEnv';

describe('PACKAGE_JSON_PATH', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let PACKAGE_JSON_PATH: unknown = null;

	beforeAll(async () => {
		__dirname = dirname(import.meta.url);
		processEnv = process.env;

		mockEnv('PACKAGE_JSON')
			.mockReturnValue(`${__dirname}/__test__/package.json`);
	});

	beforeEach(async () => {
		({ PACKAGE_JSON_PATH } = await import('./PACKAGE_JSON_PATH'));
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should be the project package.json filepath', () => {
		expect(PACKAGE_JSON_PATH).toContain('/__test__/package.json');
	});
});
