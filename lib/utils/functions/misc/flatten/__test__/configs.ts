import { ESLint } from 'eslint';

export const legacyConfig = {
	extends: ['plugin:@typescript-eslint/recommended'],
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-unused-vars': 'off',
	},
} as ESLint.ConfigData;

export const expected = expect.arrayContaining([
	expect.objectContaining({
		plugins: expect.objectContaining({
			'@typescript-eslint': expect.any(Object),
		}),
		rules: {
			'@typescript-eslint/no-unused-vars': 'off',
		},
	}),
]);
