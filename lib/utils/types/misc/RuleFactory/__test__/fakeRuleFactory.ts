import { faker } from '@faker-js/faker';

export const fakeRuleFactory = ({
	invalid = false,
}: Record<string, unknown> = {}) => jest.fn((_context: unknown) => invalid ? null : {});
