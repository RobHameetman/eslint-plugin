import { WithStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeWithStatementListener = () =>
	jest.fn(fakeListenerFn<WithStatement>);
