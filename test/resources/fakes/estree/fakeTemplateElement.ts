import type { TemplateElement } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';

export const fakeTemplateElement = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const templateElement = fakeBaseNode({
		perf,
		type: 'TemplateElement',
	}) as Partial<TemplateElement>;

	if (!perf) {
		templateElement.tail = faker.datatype.boolean();

		templateElement.value = {
			cooked: faker.lorem.word(),
			raw: faker.lorem.word(),
		};
	}

	return {
		...templateElement,
		...overrideProps,
	} as TemplateElement;
};
