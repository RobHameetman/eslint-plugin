import { ImportDeclaration } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeImportDeclarationListener = () =>
	jest.fn(fakeListenerFn<ImportDeclaration>);
