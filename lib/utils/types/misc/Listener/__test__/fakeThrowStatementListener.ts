import { ThrowStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeThrowStatementListener = () =>
	jest.fn(fakeListenerFn<ThrowStatement>);
