import { ImportDefaultSpecifier } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeImportDefaultSpecifierHandler = () =>
	jest.fn(fakeHandlerFn<ImportDefaultSpecifier>);
