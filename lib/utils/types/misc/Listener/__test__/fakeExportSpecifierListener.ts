import { ExportSpecifier } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeExportSpecifierListener = () =>
	jest.fn(fakeListenerFn<ExportSpecifier>);
