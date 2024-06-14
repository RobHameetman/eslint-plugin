import { faker } from '@faker-js/faker';
import { CustomRuleModule } from '../CustomRuleModule';
import { fake$MetaMethodInput } from '@/utils/types/structural/$MetaMethodInput/__test__';
import { fakeListenerFactory } from '@/utils/types/listeners/ListenerFactory/__test__';

export const fakeCustomRuleModule = ({
	invalid = false,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const customRuleModule = {
		create: fakeListenerFactory({ invalid }),
	} as Partial<CustomRuleModule>;

	faker.helpers.maybe(() => {
		customRuleModule.meta = fake$MetaMethodInput();
	});

	faker.helpers.maybe(() => {
		customRuleModule.schema = {};
	});

	return {
		...customRuleModule,
		...overrideProps,
	}
};
