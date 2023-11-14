import { ForOfStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeForOfStatementListener = () =>
	jest.fn(fakeListenerFn<ForOfStatement>);
