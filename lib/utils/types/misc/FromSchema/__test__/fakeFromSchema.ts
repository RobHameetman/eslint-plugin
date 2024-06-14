import { faker } from '@faker-js/faker';

export const fakeFromSchema = ({
	invalid = false,
}: Record<string, unknown> = {}) => [
	invalid ? 'maybe' : faker.helpers.arrayElement(['always', 'never']),
	{ maximumStatements: faker.number.int({ min: 15000, max: 20000 }) },
	{ minimumStatements: faker.number.int({ min: 0, max: 1000 }) },
];

export const mockSchema = [
	{
		enum: [
			'always',
			'never',
		],
	},
	{
		type: 'object',
		properties: {
			maximumStatements: {
				type: 'integer',
			},
		},
		additionalProperties: false,
	},
	{
		type: 'object',
		properties: {
			minimumStatements: {
				type: 'integer',
			},
		},
		additionalProperties: false,
	},
] as const;
