import { VariableDeclaration } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeVariableDeclarationHandler = () =>
	jest.fn(fakeHandlerFn<VariableDeclaration>);
