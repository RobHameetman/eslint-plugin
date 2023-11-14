import { MethodDefinition } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeMethodDefinitionListener = () =>
	jest.fn(fakeListenerFn<MethodDefinition>);
