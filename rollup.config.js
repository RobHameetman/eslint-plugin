import builtins from 'builtin-modules';
import alias from '@rollup/plugin-alias';
// import eslint from '@rbnlffl/rollup-plugin-eslint';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
// import copy from 'rollup-plugin-copy';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import virtual from '@rollup/plugin-virtual';

import pkg from './package.json' with { type: 'json' };
import tsconfig from './tsconfig.json' with { type: 'json' };

const isModule =
	pkg.type === 'module' ||
	(pkg.type === undefined && !(/^commonjs$/i.test(tsconfig?.compilerOptions.module)));

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const dist = `${process.cwd()}/bin`;
const src = `${process.cwd()}/lib`;
const test = `${process.cwd()}/test`;

const paths = tsconfig?.compilerOptions?.paths;
const hasPaths = paths && Object.keys(paths).length > 0;

// Create a simplified ESM compatibility layer
// const esmShims = `
//   import { createRequire } from 'node:module';
//   import { fileURLToPath } from 'node:url';
//   import { dirname } from 'node:path';

//   export { createRequire };

//   export const __dirname = null;
//   export const __filename = null;

//   export function resolvePackageJson(importMetaUrl) {
//     const require = createRequire(importMetaUrl);

//     try {
//       // Try to resolve from the current module's location
//       return require('./package.json');
//     } catch (e) {
//       try {
//         return require('../package.json');
//       } catch (e) {
//         return { version: "1.0.0", name: "@rob.hameetman/eslint-plugin" };
//       }
//     }
//   }
// `;

const config = (format = isModule ? 'esm' : 'cjs') => ({
	input: `${src}/index.ts`,
	output: {
		dir: dist,
		// file: `${dist}/plugin.min.js`,
		exports: 'named',
		format,
		sourcemap: isDevelopment,
		intro: format === 'esm'
			? `
				import { fileURLToPath } from 'url';
				import { dirname } from 'path';

				const __filename = fileURLToPath(import.meta.url);
				const __dirname = dirname(__filename);
				const require = createRequire(import.meta.url);
			`
			: '',
	},
	external: [
		...builtins.concat(Object.keys(pkg.peerDependencies || {})),
		/**
		 * These remediate warnings thrown by the resolve() plugin.
		 */
		// /eslint\/lib\/cli-engine\/file-enumerator/,
		/eslint\/lib\/util\/glob-util/,
	],
	plugins: [
		/**
		 * This fixes an issue downstream caused by eslint-plugin-import in the
		 * no-unused-modules rule. The problematic code is wrapped in a try/catch
		 * block which is why they haven't removed these imports even though
		 * glob-util(s) was removed in ESLint v6.
		 */
		replace({
      'var _require3 = require(\'eslint/lib/util/glob-utils\'),originalListFilesToProcess = _require3.listFilesToProcess':
        'var originalListFilesToProcess = function(patterns, options) { return []; }',

      'var _require4 =\n\n    require(\'eslint/lib/util/glob-util\'),_originalListFilesToProcess = _require4.listFilesToProcess':
        'var _require4 = {};\n    var _originalListFilesToProcess = function(patterns, options) { return []; }',

			// '__dirname': 'dirname(fileURLToPath(import.meta.url))',
      // '__filename': 'fileURLToPath(import.meta.url)',

      preventAssignment: true,
      delimiters: ['', '']
    }),
		commonjs({
      // Enable these important options
      transformMixedEsModules: true, // Handle mixed ES/CJS modules
      requireReturnsDefault: 'auto', // Smart handling of require() calls
      dynamicRequireTargets: [
        // Target specific problematic files - you can add any files that use dynamic requires
        'node_modules/eslint-plugin-*/lib/**/*.js'
      ],
      // Improved interoperability with ESM
      esmExternals: true,
      // For better debugging
      sourceMap: true
    }),
		resolve({
			extensions: ['.ts', '.js'],
		}),
		hasPaths && alias({
			entries: Object.fromEntries(Object.entries(paths).map(([key, value]) => ([
				key.replace('/*', ''),
				value.at(0).replace('/*', '').replace('./', `${process.cwd()}/`),
			]))),
		}),
		// eslint({
		// 	extensions: ['js', 'ts'],
		// 	throwOnWarning: isProduction,
		// }),
		json(),
		typescript({
			rollupCommonJSResolveHack: false,
			clean: true,
		}),
		terser({
			output: {
				comments: false,
			},
		}),
		// copy({
		// 	targets: [
		// 		{ src: 'README.md', dest: 'dist' },
		// 		{ src: 'LICENSE', dest: 'dist' },
		// 		{
		// 			src: 'package.json',
		// 			dest: 'dist',
		// 			transform: (content) => {
		// 				const pkgJson = JSON.parse(content.toString());

		// 				delete pkgJson.scripts;
		// 				delete pkgJson.devDependencies;
		// 				delete pkgJson.engines;
		// 				delete pkgJson.eslintConfig;
		// 				delete pkgJson.prettier;
		// 				delete pkgJson.stylelint;
		// 				delete pkgJson.jest;
		// 				delete pkgJson.postcss;
		// 				delete pkgJson.release;

		// 				/* if your project has side effects set sideEffects: true in your package.json */
		// 				if ('sideEffects' in pkgJson && pkgJson.sideEffects === true) {
		// 					delete pkgJson.sideEffects;
		// 				} else {
		// 					pkgJson.sideEffects = false;
		// 				}

		// 				return JSON.stringify(pkgJson, null, 2);
		// 			},
		// 		},
		// 	],
		// }),
	].filter(Boolean),
});

export default [
	config(),
];
