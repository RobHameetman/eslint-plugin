import { SpreadElement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeSpreadElementListener = () =>
	jest.fn(fakeListenerFn<SpreadElement>);
