import { ESLint } from 'eslint';
import { faker } from '@faker-js/faker';
import { LegacyConfig } from '../LegacyConfig';

const randomRules = [
	'brace-style',
	'camelcase',
	'comma-dangle',
	'comma-spacing',
	'curly',
	'explicit-function-return-type',
	'explicit-member-accessibility',
	'explicit-module-boundary-types',
	'func-call-spacing',
	'generator-star-spacing',
	'keyword-spacing',
	'lines-between-class-members',
	'no-alert',
	'no-console',
	'no-debugger',
	'no-extend-native',
	'no-extra-bind',
	'no-extra-label',
	'no-extra-semi',
	'no-param-reassign',
	'no-prototype-builtins',
	'no-restricted-syntax',
	'no-shadow',
	'no-undef',
	'no-underscore-dangle',
	'no-unused-vars',
	'no-use-before-define',
	'max-len',
	'padding-line-between-statements',
	'semi',
	'space-before-function-paren',
	'quotes',
];

export const fakeRules = ({
	actual = false,
	length = faker.number.int({ min: 1, max: randomRules.length }),
}: Record<string, unknown> = {}) => (
	actual
		? faker.helpers.arrayElements(randomRules, length as number)
		: Array.from({ length: Number(length) }, () => faker.helpers.fake('{{word.adjective}}/{{word.noun}}'))
).reduce((rules, rule) => ({
	...rules,
	[rule]: faker.datatype.boolean(),
}), {});

export const fakeLegacyConfig = ({
	actual = false,
	invalid = false,
	...overrideOptions
}: Record<string, unknown> = {}) => {
	const legacyConfig = {
		extends: faker.helpers.arrayElement([
			faker.helpers.arrayElement([
				'eslint:recommended',
				'plugin:react/recommended',
				'plugin:@typescript-eslint/recommended',
			]),
		]),
	} as ESLint.ConfigData;

	faker.helpers.maybe(() => {
		legacyConfig.plugins = Array.from(
			{ length: faker.datatype.number({ min: 1, max: 5 }) },
			() => faker.helpers.fake('plugin:{{word.noun}}/recommended'),
		);
	});

	faker.helpers.maybe(() => {
		legacyConfig.rules = fakeRules({ actual });
	});

	return invalid ? null : {
		...legacyConfig,
		...overrideOptions,
	} as LegacyConfig;
};
