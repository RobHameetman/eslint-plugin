import { faker } from '@faker-js/faker';
import { RuleModule } from '../RuleModule';
import { fakeInfoMethodInput } from '../../../structural/InfoMethodInput/__test__';
import { fakeRuleFactory } from '../../RuleFactory/__test__';

export const fakeRuleModule = ({
	invalid = false,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const ruleModule = {
		create: fakeRuleFactory({ invalid }),
	} as Partial<RuleModule>;

	faker.helpers.maybe(() => {
		ruleModule.meta = fakeInfoMethodInput();
	});

	faker.helpers.maybe(() => {
		ruleModule.schema = {};
	});

	return {
		...ruleModule,
		...overrideProps,
	}
};
