import { ThrowStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeThrowStatementHandler = () =>
	jest.fn(fakeHandlerFn<ThrowStatement>);
