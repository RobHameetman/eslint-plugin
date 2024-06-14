import { BlockStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeBlockStatementHandler = () =>
	jest.fn(fakeHandlerFn<BlockStatement>);
