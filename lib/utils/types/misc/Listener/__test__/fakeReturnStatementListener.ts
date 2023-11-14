import { ReturnStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeReturnStatementListener = () =>
	jest.fn(fakeListenerFn<ReturnStatement>);
