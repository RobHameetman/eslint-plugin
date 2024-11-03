import type { ModuleDeclaration } from 'estree';
import { isImportDeclaration } from '@/utils/functions/estree/isImportDeclaration';
import { isExportNamedDeclaration } from '@/utils/functions/estree/isExportNamedDeclaration';
import { isExportDefaultDeclaration } from '@/utils/functions/estree/isExportDefaultDeclaration';
import { isExportAllDeclaration } from '@/utils/functions/estree/isExportAllDeclaration';

/**
 * Checks that an `unknown` value is a {@link ModuleDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following types:
 *     - `ImportDeclaration`
 *     - `ExportNamedDeclaration`
 *     - `ExportDefaultDeclaration`
 *     - `ExportAllDeclaration`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ModuleDeclaration}.
 */
export const isModuleDeclaration = (value: unknown): value is ModuleDeclaration =>
	/**
	 * value
	 */
	isImportDeclaration(value) ||
	isExportNamedDeclaration(value) ||
	isExportDefaultDeclaration(value) ||
	isExportAllDeclaration(value);
