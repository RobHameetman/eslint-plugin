import { MetaProperty } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeMetaPropertyListener = () =>
	jest.fn(fakeListenerFn<MetaProperty>);
