import { ImportNamespaceSpecifier } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeImportNamespaceSpecifierListener = () =>
	jest.fn(fakeListenerFn<ImportNamespaceSpecifier>);
