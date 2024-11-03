import type { BaseNode } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeComments } from '@@/fakes/estree/fakeComments';
import { fakeBaseNodeWithoutComments } from './fakeBaseNodeWithoutComments';

export const fakeBaseNode = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const baseNode = fakeBaseNodeWithoutComments({ perf }) as Partial<BaseNode>;

	if (!perf) {
		faker.helpers.maybe(() => {
			baseNode.leadingComments = fakeComments();
		});

		faker.helpers.maybe(() => {
			baseNode.trailingComments = fakeComments();
		});
	}

	return {
		...baseNode,
		...overrideProps,
	} as BaseNode;
};
