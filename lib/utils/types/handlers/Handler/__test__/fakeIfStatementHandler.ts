import { IfStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeIfStatementHandler = () =>
	jest.fn(fakeHandlerFn<IfStatement>);
