import builtins from 'builtin-modules';
import alias from '@rollup/plugin-alias';
// import eslint from '@rbnlffl/rollup-plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
// import copy from 'rollup-plugin-copy';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';

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

const config = (format = isModule ? 'esm' : 'cjs') => ({
	input: `${src}/index.ts`,
	output: {
		file: `${dist}/plugin.min.js`,
		exports: 'named',
		format,
		sourcemap: isDevelopment,
	},
	external: builtins.concat(Object.keys(pkg.dependencies || {})),
	plugins: [
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
		commonjs(),
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
