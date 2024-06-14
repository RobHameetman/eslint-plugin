import { MethodDefinition } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeMethodDefinitionHandler = () =>
	jest.fn(fakeHandlerFn<MethodDefinition>);
