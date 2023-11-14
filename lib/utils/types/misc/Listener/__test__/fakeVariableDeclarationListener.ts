import { VariableDeclaration } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeVariableDeclarationListener = () =>
	jest.fn(fakeListenerFn<VariableDeclaration>);
