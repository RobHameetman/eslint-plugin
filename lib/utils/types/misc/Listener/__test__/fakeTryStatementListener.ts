import { TryStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeTryStatementListener = () =>
	jest.fn(fakeListenerFn<TryStatement>);
