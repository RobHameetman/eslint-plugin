import type { BaseClass } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeClassBody } from './fakeClassBody';
import { fakeExpression } from './fakeExpression';

export const fakeBaseClass = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const baseClass = fakeBaseNode({
		perf,
		body: fakeClassBody(),
		...overrideProps,
	}) as Partial<BaseClass>;

	faker.helpers.maybe(() => {
		baseClass.superClass =
			faker.datatype.boolean()
				? fakeExpression()
				: faker.helpers.arrayElement([ undefined, null ]);
	});

	return {
		...baseClass,
		...overrideProps,
	} as BaseClass;
};
