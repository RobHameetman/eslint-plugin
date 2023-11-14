import { WhileStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeWhileStatementListener = () =>
	jest.fn(fakeListenerFn<WhileStatement>);
