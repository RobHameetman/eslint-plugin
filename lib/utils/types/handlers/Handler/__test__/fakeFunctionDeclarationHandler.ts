import { FunctionDeclaration } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeFunctionDeclarationHandler = () =>
	jest.fn(fakeHandlerFn<FunctionDeclaration>);
