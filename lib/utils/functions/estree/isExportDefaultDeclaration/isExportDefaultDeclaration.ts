import type { ExportDefaultDeclaration } from 'estree';
import { isBaseModuleDeclaration } from '@functions/estree/isBaseModuleDeclaration';

/**
 * Checks that an `unknown` value is a {@link ExportDefaultDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseModuleDeclaration`.
 *   - `value.type` is required and must be `'ExportDefaultDeclaration'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ExportDefaultDeclaration}.
 */
export const isExportDefaultDeclaration = (value: unknown): value is ExportDefaultDeclaration =>
	/**
	 * value
	 */
	isBaseModuleDeclaration(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ExportDefaultDeclaration';
