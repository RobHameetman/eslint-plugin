import { BreakStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeBreakStatementHandler = () =>
	jest.fn(fakeHandlerFn<BreakStatement>);
