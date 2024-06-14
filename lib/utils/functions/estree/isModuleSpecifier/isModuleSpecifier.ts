import type { ModuleSpecifier } from 'estree';
import { isImportSpecifier } from '@/utils/functions/estree/isImportSpecifier';
import { isImportDefaultSpecifier } from '@/utils/functions/estree/isImportDefaultSpecifier';
import { isImportNamespaceSpecifier } from '@/utils/functions/estree/isImportNamespaceSpecifier';
import { isExportSpecifier } from '@/utils/functions/estree/isExportSpecifier';

/**
 * Checks that an `unknown` value is a {@link ModuleSpecifier}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following types:
 *     - `ImportSpecifier`
 *     - `ImportDefaultSpecifier`
 *     - `ImportNamespaceSpecifier`
 *     - `ExportSpecifier`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ModuleSpecifier}.
 */
export const isModuleSpecifier = (value: unknown): value is ModuleSpecifier =>
	/**
	 * value
	 */
	isImportSpecifier(value) ||
	isImportDefaultSpecifier(value) ||
	isImportNamespaceSpecifier(value) ||
	isExportSpecifier(value);
