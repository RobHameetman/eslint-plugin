import { VariableDeclarator } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeVariableDeclaratorListener = () =>
	jest.fn(fakeListenerFn<VariableDeclarator>);
