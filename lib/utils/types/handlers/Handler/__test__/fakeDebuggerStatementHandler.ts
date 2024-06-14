import { DebuggerStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeDebuggerStatementHandler = () =>
	jest.fn(fakeHandlerFn<DebuggerStatement>);
