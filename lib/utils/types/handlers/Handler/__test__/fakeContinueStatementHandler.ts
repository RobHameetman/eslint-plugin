import { ContinueStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeContinueStatementHandler = () =>
	jest.fn(fakeHandlerFn<ContinueStatement>);
