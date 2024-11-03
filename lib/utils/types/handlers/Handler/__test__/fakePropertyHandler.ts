import { Property } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakePropertyHandler = () =>
	jest.fn(fakeHandlerFn<Property>);
