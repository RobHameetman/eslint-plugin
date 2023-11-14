import { ForInStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeForInStatementListener = () =>
	jest.fn(fakeListenerFn<ForInStatement>);
