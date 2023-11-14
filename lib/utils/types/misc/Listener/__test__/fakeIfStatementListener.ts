import { IfStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeIfStatementListener = () =>
	jest.fn(fakeListenerFn<IfStatement>);
