import { ImportDefaultSpecifier } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeImportDefaultSpecifierListener = () =>
	jest.fn(fakeListenerFn<ImportDefaultSpecifier>);
