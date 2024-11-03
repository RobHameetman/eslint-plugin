import { VariableDeclarator } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeVariableDeclaratorHandler = () =>
	jest.fn(fakeHandlerFn<VariableDeclarator>);
