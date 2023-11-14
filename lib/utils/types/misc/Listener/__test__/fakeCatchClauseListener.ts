import { CatchClause } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeCatchClauseListener = () =>
	jest.fn(fakeListenerFn<CatchClause>);
