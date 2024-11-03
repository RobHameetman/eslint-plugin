import { ExpressionStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeExpressionStatementHandler = () =>
	jest.fn(fakeHandlerFn<ExpressionStatement>);
