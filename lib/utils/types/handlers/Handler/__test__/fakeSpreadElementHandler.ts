import { SpreadElement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeSpreadElementHandler = () =>
	jest.fn(fakeHandlerFn<SpreadElement>);
