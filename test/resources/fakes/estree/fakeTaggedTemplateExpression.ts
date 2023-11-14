import type { TaggedTemplateExpression } from 'estree';
import { fakeBaseExpression } from './fakeBaseExpression';
import { fakeExpression } from './fakeExpression';
import { fakeTemplateLiteral } from './fakeTemplateLiteral';

export const fakeTaggedTemplateExpression = ({
	perf = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const taggedTemplateExpression = fakeBaseExpression({
		perf,
		type: 'TaggedTemplateExpression',
	}) as Partial<TaggedTemplateExpression>;

	if (!perf) {
		taggedTemplateExpression.tag = fakeExpression();
		taggedTemplateExpression.quasi = fakeTemplateLiteral();
	}

	return {
		...taggedTemplateExpression,
		...overrideProps,
	} as TaggedTemplateExpression;
};
