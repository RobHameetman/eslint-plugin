import { ForStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeForStatementHandler = () =>
	jest.fn(fakeHandlerFn<ForStatement>);
