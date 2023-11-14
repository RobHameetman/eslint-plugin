import type { Directive } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';

export const fakeDirective = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const directive = fakeBaseNode({
		perf,
		type: 'ExpressionStatement',
	}) as Partial<Directive>;

	if (!perf) {
		directive.expression = {} as Directive['expression'];
		directive.directive = faker.lorem.word();
	}

	return {
		...directive,
		...overrideProps,
	} as Directive;
};
