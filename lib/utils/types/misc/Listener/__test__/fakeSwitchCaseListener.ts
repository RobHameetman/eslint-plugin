import { SwitchCase } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeSwitchCaseListener = () =>
	jest.fn(fakeListenerFn<SwitchCase>);
