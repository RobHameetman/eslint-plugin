import { ExportAllDeclaration } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeExportAllDeclarationHandler = () =>
	jest.fn(fakeHandlerFn<ExportAllDeclaration>);
