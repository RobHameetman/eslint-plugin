import type { RestElement } from 'estree';
import { fakeBasePattern } from './fakeBasePattern';
import { fakePattern } from './fakePattern';

export const fakeRestElement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const restElement = fakeBasePattern({
		perf,
		type: 'RestElement',
	}) as Partial<RestElement>;

	if (!perf) {
		restElement.argument = fakePattern();
	}

	return {
		...restElement,
		...overrideProps,
	} as RestElement;
};
