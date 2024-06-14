import { TaggedTemplateExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeTaggedTemplateExpressionHandler = () =>
	jest.fn(fakeHandlerFn<TaggedTemplateExpression>);
