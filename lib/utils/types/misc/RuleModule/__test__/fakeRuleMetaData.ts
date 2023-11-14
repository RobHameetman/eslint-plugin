import type { Rule } from 'eslint';
import { faker } from '@faker-js/faker';
import { randomCategory } from '@enums/Categories/__test__';
import { randomFixability } from '@enums/Fixabilities/__test__';

export const fakeRuleMetaData = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const ruleMetaData = {
		name: faker.commerce.productName(),
		description: faker.commerce.productDescription(),
		category: randomCategory(),
	} as Partial<Rule.RuleMetaData>;

	faker.helpers.maybe(() => {
		ruleMetaData.fixable = randomFixability();
	});

	faker.helpers.maybe(() => {
		//
	});

	return {
		...ruleMetaData,
		...overrideProps,
	} as Rule.RuleMetaData;
};
