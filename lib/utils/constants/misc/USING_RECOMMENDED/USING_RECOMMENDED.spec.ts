import { mockEnv } from '@@/utils/misc/mockEnv';

describe('USING_RECOMMENDED', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let USING_RECOMMENDED: unknown = null;

	beforeAll(async () => {
		__dirname = dirname(import.meta.url);
		processEnv = process.env;

		mockEnv('USING_RECOMMENDED')
			.mockReturnValueOnce('true')
			.mockReturnValue(undefined);
	});

	beforeEach(async () => {
		({ USING_RECOMMENDED } = await import('./USING_RECOMMENDED'));
	});

	afterEach(() => {
		jest.resetModules();
		USING_RECOMMENDED = null;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given process.env.USING_RECOMMENDED is defined', async () => {
		await expect(USING_RECOMMENDED).toBe(true);
	});

	it('should be false given process.env.USING_RECOMMENDED is not defined', async () => {
		await expect(USING_RECOMMENDED).toBe(false);
	});
});
