import { CatchClause } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeCatchClauseHandler = () =>
	jest.fn(fakeHandlerFn<CatchClause>);
