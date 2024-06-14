import { Identifier } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeIdentifierHandler = () =>
	jest.fn(fakeHandlerFn<Identifier>);
