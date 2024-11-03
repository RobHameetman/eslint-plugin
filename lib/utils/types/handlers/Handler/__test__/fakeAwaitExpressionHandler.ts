import { AwaitExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeAwaitExpressionHandler = () =>
	jest.fn(fakeHandlerFn<AwaitExpression>);
