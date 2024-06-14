import { ExportDefaultDeclaration } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeExportDefaultDeclarationHandler = () =>
	jest.fn(fakeHandlerFn<ExportDefaultDeclaration>);
