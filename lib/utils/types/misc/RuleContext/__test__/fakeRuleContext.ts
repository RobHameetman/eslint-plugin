import { faker } from '@faker-js/faker';
import { isNumber, isObject } from '@rob.hameetman/type-guards';

export const fakeRuleContext = ({
	parserOptions = {},
	...overrideProps
}: Record<string, unknown> = {}) => ({
	id: faker.string.sample(),
	options: [{ maximumStatements: 1 }],
	settings: {},
	parserPath: faker.system.filePath(),
	parserOptions: {
		ecmaVersion: new Date().getFullYear(),
		sourceType: faker.helpers.arrayElement(['module', 'script']),
		...(parserOptions as Record<string, unknown>),
	},
	parserServices: {},
	cwd: faker.system.directoryPath(),
	filename: faker.system.fileName(),
	physicalFilename: faker.system.fileName(),
	sourceCode: {},
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
});

export const invalidRuleContext = () => fakeRuleContext({
	options: [{ maximumStatements: null }]
});

export const isOptions = (value: unknown) =>
	isObject(value) &&
	'maximumStatements' in value &&
	isNumber(value.maximumStatements);
