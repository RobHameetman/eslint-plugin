import { SwitchStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeSwitchStatementListener = () =>
	jest.fn(fakeListenerFn<SwitchStatement>);
