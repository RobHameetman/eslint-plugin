import { realpathSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { jest } from '@jest/globals';
import '../matchers';

global.jest = jest;

Object.defineProperties(global, {
	filename: {
		value: (url: string) => fileURLToPath(url),
	},
});

Object.defineProperties(global, {
	dirname: {
		value: (url: string) => dirname(global.filename(url)),
	},
});

Object.assign(process.env, {
	CONFIG_TEST_TIMEOUT: '10000',
});

beforeAll(() => {
	// jest.useFakeTimers();
});

beforeEach(() => {
	//
});

afterEach(() => {
	jest.clearAllMocks();
});

afterAll(() => {
	jest.restoreAllMocks();
	jest.resetModules();
	// jest.useRealTimers();
});
