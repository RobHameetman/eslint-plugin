import { Literal } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeLiteralListener = () =>
	jest.fn(fakeListenerFn<Literal>);
