import { MetaProperty } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeMetaPropertyHandler = () =>
	jest.fn(fakeHandlerFn<MetaProperty>);
