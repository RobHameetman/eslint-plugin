import { ForStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeForStatementListener = () =>
	jest.fn(fakeListenerFn<ForStatement>);
