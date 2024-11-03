import type { ExportAllDeclaration } from 'estree';
import { isBaseModuleDeclaration } from '@/utils/functions/estree/isBaseModuleDeclaration';

/**
 * Checks that an `unknown` value is a {@link ExportAllDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseModuleDeclaration`.
 *   - `value.type` is required and must be `'ExportAllDeclaration'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ExportAllDeclaration}.
 */
export const isExportAllDeclaration = (value: unknown): value is ExportAllDeclaration =>
	/**
	 * value
	 */
	isBaseModuleDeclaration(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ExportAllDeclaration';
