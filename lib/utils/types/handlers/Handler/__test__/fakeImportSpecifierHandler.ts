import { ImportSpecifier } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeImportSpecifierHandler = () =>
	jest.fn(fakeHandlerFn<ImportSpecifier>);
