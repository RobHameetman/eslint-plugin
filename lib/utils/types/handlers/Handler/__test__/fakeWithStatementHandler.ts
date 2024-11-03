import { WithStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeWithStatementHandler = () =>
	jest.fn(fakeHandlerFn<WithStatement>);
