/**
 * @see https://github.com/eslint/eslint/blob/main/packages/js/src/index.js
 */
declare module '@eslint/js' {
	import type { Linter } from 'eslint';

	export const configs: Record<'all' | 'recommended', Linter.Config>;
}
