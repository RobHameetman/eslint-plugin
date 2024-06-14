import { ClassDeclaration } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeClassDeclarationHandler = () =>
	jest.fn(fakeHandlerFn<ClassDeclaration>);
