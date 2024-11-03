import { TryStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeTryStatementHandler = () =>
	jest.fn(fakeHandlerFn<TryStatement>);
