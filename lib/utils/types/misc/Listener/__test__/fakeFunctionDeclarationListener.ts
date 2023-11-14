import { FunctionDeclaration } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeFunctionDeclarationListener = () =>
	jest.fn(fakeListenerFn<FunctionDeclaration>);
