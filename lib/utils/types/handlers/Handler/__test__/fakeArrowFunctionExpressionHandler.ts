import { ArrowFunctionExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeArrowFunctionExpressionHandler = () =>
	jest.fn(fakeHandlerFn<ArrowFunctionExpression>);
