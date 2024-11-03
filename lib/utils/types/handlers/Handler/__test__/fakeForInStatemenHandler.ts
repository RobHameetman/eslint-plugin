import { ForInStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeForInStatementHandler = () =>
	jest.fn(fakeHandlerFn<ForInStatement>);
