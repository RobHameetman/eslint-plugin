import { ExpressionStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeExpressionStatementListener = () =>
	jest.fn(fakeListenerFn<ExpressionStatement>);
