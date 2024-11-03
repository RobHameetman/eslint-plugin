import type { ExportNamedDeclaration } from 'estree';
import { isBaseModuleDeclaration } from '@/utils/functions/estree/isBaseModuleDeclaration';

/**
 * Checks that an `unknown` value is a {@link ExportNamedDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseModuleDeclaration`.
 *   - `value.type` is required and must be `'ExportNamedDeclaration'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ExportNamedDeclaration}.
 */
export const isExportNamedDeclaration = (value: unknown): value is ExportNamedDeclaration =>
	/**
	 * value
	 */
	isBaseModuleDeclaration(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ExportNamedDeclaration';
