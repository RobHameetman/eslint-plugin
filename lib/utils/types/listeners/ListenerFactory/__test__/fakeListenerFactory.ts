import { faker } from '@faker-js/faker';

export const fakeListenerFactory = ({
	invalid = false,
}: Record<string, unknown> = {}) => jest.fn((_context: unknown) => invalid ? null : {});
