import { ClassDeclaration } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeClassDeclarationListener = () =>
	jest.fn(fakeListenerFn<ClassDeclaration>);
