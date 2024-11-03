import { ArrayExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeArrayExpressionHandler = () =>
	jest.fn(fakeHandlerFn<ArrayExpression>);
