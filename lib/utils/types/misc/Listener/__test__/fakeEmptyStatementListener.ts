import { EmptyStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeEmptyStatementListener = () =>
	jest.fn(fakeListenerFn<EmptyStatement>);
