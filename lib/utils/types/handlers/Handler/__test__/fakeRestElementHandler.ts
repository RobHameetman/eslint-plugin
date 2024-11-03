import { RestElement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeRestElementHandler = () =>
	jest.fn(fakeHandlerFn<RestElement>);
