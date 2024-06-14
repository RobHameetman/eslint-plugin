import { FunctionExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeFunctionExpressionHandler = () =>
	jest.fn(fakeHandlerFn<FunctionExpression>);
