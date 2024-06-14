import { ConditionalExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeConditionalExpressionHandler = () =>
	jest.fn(fakeHandlerFn<ConditionalExpression>);
