import { Super } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeSuperListener = () =>
	jest.fn(fakeListenerFn<Super>);
