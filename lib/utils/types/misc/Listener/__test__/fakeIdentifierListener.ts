import { Identifier } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeIdentifierListener = () =>
	jest.fn(fakeListenerFn<Identifier>);
