import { ExportSpecifier } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeExportSpecifierHandler = () =>
	jest.fn(fakeHandlerFn<ExportSpecifier>);
