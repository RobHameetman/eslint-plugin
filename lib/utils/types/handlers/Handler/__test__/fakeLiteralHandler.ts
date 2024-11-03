import { Literal } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeLiteralHandler = () =>
	jest.fn(fakeHandlerFn<Literal>);
