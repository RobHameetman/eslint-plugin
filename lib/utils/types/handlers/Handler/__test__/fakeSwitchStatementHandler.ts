import { SwitchStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeSwitchStatementHandler = () =>
	jest.fn(fakeHandlerFn<SwitchStatement>);
