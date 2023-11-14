import { BlockStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeBlockStatementListener = () =>
	jest.fn(fakeListenerFn<BlockStatement>);
