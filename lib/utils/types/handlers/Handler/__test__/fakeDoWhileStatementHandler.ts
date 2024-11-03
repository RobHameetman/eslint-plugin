import { DoWhileStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeDoWhileStatementHandler = () =>
	jest.fn(fakeHandlerFn<DoWhileStatement>);
