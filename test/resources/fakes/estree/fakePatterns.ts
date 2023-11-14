import type { Pattern } from 'estree';
import { faker } from '@faker-js/faker';
import { fakePattern } from './fakePattern';

export const fakePatterns = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) =>
	Array.from(
		{ length: faker.number.int({ min: 1, max: 10 }) },
		() => fakePattern({ perf, ...overrideProps })
	) as Array<Pattern>;
