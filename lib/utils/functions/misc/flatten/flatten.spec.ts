import type { Linter } from 'eslint';
import * as compat from '@eslint/compat';
import { LegacyConfig } from '@/utils/types/misc/LegacyConfig';
import { flatten as _flatten } from './flatten';
import { expected, legacyConfig } from './__test__';

describe('flatten()', () => {
	let mockFixupConfigRules: (jest.SpyInstance & typeof compat.fixupConfigRules) | null = null;
	let flatten: typeof _flatten | null = null;

	beforeAll(() => {
		mockFixupConfigRules = jest.fn().mockImplementation((config: LegacyConfig) => config);

		flatten = (config: LegacyConfig | undefined, options = { fixup: false }) =>
			_flatten(config, {
				...options,
				_dependencies: {
					fixupConfigRules: mockFixupConfigRules as (jest.SpyInstance & typeof compat.fixupConfigRules),
				},
			});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		jest.resetModules();
		jest.restoreAllMocks();

		flatten = null;
		mockFixupConfigRules = null;
	});

	it('should return a flat config given a valid legacy config and no second argument', () => {
		expect(flatten?.(legacyConfig)).toStrictEqual(expected);
		expect(mockFixupConfigRules).not.toHaveBeenCalled();
	});

	it('should return a flat config given a valid legacy config and false as a second argument', () => {
		expect(flatten?.(legacyConfig, { fixup: false })).toStrictEqual(expected);
		expect(mockFixupConfigRules).not.toHaveBeenCalled();
	});

	it('should return a flat config and call fixupConfigRules() given a valid legacy config and true as a second argument', () => {
		expect(flatten?.(legacyConfig, { fixup: true })).toStrictEqual(expected);
		expect(mockFixupConfigRules).toHaveBeenCalledTimes(1);
	});
});
