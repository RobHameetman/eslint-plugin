import { errop } from '@@/utils/misc/errop';
import { mockEnv } from '@@/utils/misc/mockEnv';

describe('usingRecommended()', () => {
	let __dirname: string | null = null;
	let processEnv: NodeJS.ProcessEnv | null = null;
	let usingRecommended: (() => boolean) | errop = errop;

	beforeAll(async () => {
		__dirname = dirname(import.meta.url);
		processEnv = process.env;

		mockEnv('USING_RECOMMENDED')
			.mockReturnValueOnce('true')
			.mockReturnValue(undefined);
	});

	beforeEach(async () => {
		({ usingRecommended } = await import('./usingRecommended'));
	});

	afterEach(() => {
		jest.resetModules();
		usingRecommended = errop;
	});

	afterAll(() => {
		__dirname = null;
		process.env = processEnv as NodeJS.ProcessEnv;
		jest.restoreAllMocks();
	});

	it('should be true given process.env.USING_RECOMMENDED is defined', async () => {
		await expect(usingRecommended()).toBe(true);
	});

	it('should be false given process.env.USING_RECOMMENDED is not defined', async () => {
		await expect(usingRecommended()).toBe(false);
	});
});
