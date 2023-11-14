import { ExportNamedDeclaration } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeExportNamedDeclarationListener = () =>
	jest.fn(fakeListenerFn<ExportNamedDeclaration>);
