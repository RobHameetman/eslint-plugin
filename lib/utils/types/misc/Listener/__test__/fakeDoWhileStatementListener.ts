import { DoWhileStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeDoWhileStatementListener = () =>
	jest.fn(fakeListenerFn<DoWhileStatement>);
