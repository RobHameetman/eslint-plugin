import { Property } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakePropertyListener = () =>
	jest.fn(fakeListenerFn<Property>);
