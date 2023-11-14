import { ExportDefaultDeclaration } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeExportDefaultDeclarationListener = () =>
	jest.fn(fakeListenerFn<ExportDefaultDeclaration>);
