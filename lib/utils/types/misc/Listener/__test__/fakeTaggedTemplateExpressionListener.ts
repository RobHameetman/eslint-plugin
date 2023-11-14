import { TaggedTemplateExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeTaggedTemplateExpressionListener = () =>
	jest.fn(fakeListenerFn<TaggedTemplateExpression>);
