import { EmptyStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeEmptyStatementHandler = () =>
	jest.fn(fakeHandlerFn<EmptyStatement>);
