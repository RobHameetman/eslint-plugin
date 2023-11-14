import { BreakStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeBreakStatementListener = () =>
	jest.fn(fakeListenerFn<BreakStatement>);
