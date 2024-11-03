import type { ExportSpecifier } from 'estree';
import { isBaseModuleSpecifier } from '@/utils/functions/estree/isBaseModuleSpecifier';

/**
 * Checks that an `unknown` value is a {@link ExportSpecifier}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseModuleSpecifier`.
 *   - `value.type` is required and must be `'ExportSpecifier'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ExportSpecifier}.
 */
export const isExportSpecifier = (value: unknown): value is ExportSpecifier =>
	/**
	 * value
	 */
	isBaseModuleSpecifier(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ExportSpecifier';
