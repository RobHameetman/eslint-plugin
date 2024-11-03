import { ForOfStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeForOfStatementHandler = () =>
	jest.fn(fakeHandlerFn<ForOfStatement>);
