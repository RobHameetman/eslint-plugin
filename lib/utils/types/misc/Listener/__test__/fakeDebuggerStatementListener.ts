import { DebuggerStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeDebuggerStatementListener = () =>
	jest.fn(fakeListenerFn<DebuggerStatement>);
