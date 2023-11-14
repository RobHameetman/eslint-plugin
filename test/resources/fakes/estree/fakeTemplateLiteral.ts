import type { TemplateLiteral } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeBaseNode } from './fakeBaseNode';
import { fakeExpressions } from './fakeExpressions';
import { fakeTemplateElement } from './fakeTemplateElement';

const fakeQuasis = () => Array.from(
	{ length: faker.number.int({ min: 1, max: 5 }) },
	() => faker.helpers.arrayElement([
		fakeTemplateElement,
	])(),
);

export const fakeTemplateLiteral = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const templateLiteral = fakeBaseNode({
		perf,
		type: 'TemplateLiteral',
	}) as Partial<TemplateLiteral>;

	if (!perf) {
		templateLiteral.quasis = fakeQuasis();
		templateLiteral.expressions = fakeExpressions();
	}

	return {
		...templateLiteral,
		...overrideProps,
	} as TemplateLiteral;
};
