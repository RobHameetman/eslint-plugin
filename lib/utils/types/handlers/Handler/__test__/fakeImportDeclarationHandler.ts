import { ImportDeclaration } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeImportDeclarationHandler = () =>
	jest.fn(fakeHandlerFn<ImportDeclaration>);
