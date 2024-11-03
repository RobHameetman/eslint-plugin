import { ReturnStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeReturnStatementHandler = () =>
	jest.fn(fakeHandlerFn<ReturnStatement>);
