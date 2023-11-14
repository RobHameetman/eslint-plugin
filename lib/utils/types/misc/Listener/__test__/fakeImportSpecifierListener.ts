import { ImportSpecifier } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeImportSpecifierListener = () =>
	jest.fn(fakeListenerFn<ImportSpecifier>);
