import { WhileStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeWhileStatementHandler = () =>
	jest.fn(fakeHandlerFn<WhileStatement>);
