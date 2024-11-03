import { ExportNamedDeclaration } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeExportNamedDeclarationHandler = () =>
	jest.fn(fakeHandlerFn<ExportNamedDeclaration>);
