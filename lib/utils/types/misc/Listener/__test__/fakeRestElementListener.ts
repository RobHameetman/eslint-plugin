import { RestElement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeRestElementListener = () =>
	jest.fn(fakeListenerFn<RestElement>);
