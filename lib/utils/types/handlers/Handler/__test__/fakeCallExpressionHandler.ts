import { CallExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeCallExpressionHandler = () =>
	jest.fn(fakeHandlerFn<CallExpression>);
