import { SwitchCase } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeSwitchCaseHandler = () =>
	jest.fn(fakeHandlerFn<SwitchCase>);
