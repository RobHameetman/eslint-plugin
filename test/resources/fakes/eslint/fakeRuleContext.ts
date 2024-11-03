import { Rule } from 'eslint';
import { faker } from '@faker-js/faker';
import { isNumber, isObject } from '@rob.hameetman/type-guards';
import { fakeSettings } from '@/utils/types/misc/Settings/__test__/fakeSettings';

export const fakeRuleContext = ({
	parserOptions = {},
	sourceType = faker.helpers.arrayElement(['module', 'script']),
	...overrideProps
}: Record<string, unknown> = {}) => ({
	id: faker.string.sample(),
	options: [],
	settings: fakeSettings(),
	parserPath: faker.system.filePath(),
	languageOptions: {
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType,
			...(parserOptions as Record<string, unknown>),
		},
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType,
		...(parserOptions as Record<string, unknown>),
	},
	parserServices: {},
	cwd: faker.system.directoryPath(),
	filename: faker.system.fileName(),
	physicalFilename: faker.system.fileName(),
	sourceCode: {} as Rule.RuleContext['sourceCode'],
	getAncestors: jest.fn(),
	getDeclaredVariables: jest.fn(),
	getFilename: jest.fn(),
	getPhysicalFilename: jest.fn(),
	getCwd: jest.fn(),
	getScope: jest.fn(),
	getSourceCode: jest.fn(),
	markVariableAsUsed: jest.fn(),
	report: jest.fn(),
	...overrideProps,
} as Rule.RuleContext);

export const invalidRuleContext = () => fakeRuleContext({
	options: [{ maximumStatements: null }]
});

export const isOptions = (value: unknown) =>
	isObject(value) &&
	'maximumStatements' in value &&
	isNumber(value.maximumStatements);
