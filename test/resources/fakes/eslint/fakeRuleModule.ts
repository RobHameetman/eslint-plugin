import { Rule } from 'eslint';
import { faker } from '@faker-js/faker';
import { fake$MetaMethodInput } from '@/utils/types/structural/$MetaMethodInput/__test__';
import { fakeListenerFactory } from '@/utils/types/listeners/ListenerFactory/__test__';

export const fakeRuleModule = ({
	invalid = false,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const ruleModule = {
		create: fakeListenerFactory({ invalid }),
	} as Partial<Rule.Module>;

	faker.helpers.maybe(() => {
		ruleModule.meta = fake$MetaMethodInput();
	});

	faker.helpers.maybe(() => {
		ruleModule.schema = {};
	});

	return {
		...ruleModule,
		...overrideProps,
	}
};
