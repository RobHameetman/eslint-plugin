import { UnaryExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeUnaryExpressionHandler = () =>
	jest.fn(fakeHandlerFn<UnaryExpression>);
