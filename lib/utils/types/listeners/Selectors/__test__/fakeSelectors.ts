import { faker } from '@faker-js/faker';
import { fakeSelector } from '@/utils/types/listeners/Selector/__test__/fakeSelector';
import { Selectors } from '../Selectors';

export const fakeSelectors = ({
	invalid = false,
}: Record<string, unknown> = {}) =>
	Array.from(
		{ length: faker.number.int({ min: 1, max: 5 }) },
		() => fakeSelector({ invalid }),
	) as Selectors;
