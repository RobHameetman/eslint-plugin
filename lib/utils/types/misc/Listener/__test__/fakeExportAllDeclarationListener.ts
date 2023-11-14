import { ExportAllDeclaration } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeExportAllDeclarationListener = () =>
	jest.fn(fakeListenerFn<ExportAllDeclaration>);
