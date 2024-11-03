import { ImportNamespaceSpecifier } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeImportNamespaceSpecifierHandler = () =>
	jest.fn(fakeHandlerFn<ImportNamespaceSpecifier>);
