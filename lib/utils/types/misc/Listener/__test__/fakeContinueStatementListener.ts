import { ContinueStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeContinueStatementListener = () =>
	jest.fn(fakeListenerFn<ContinueStatement>);
