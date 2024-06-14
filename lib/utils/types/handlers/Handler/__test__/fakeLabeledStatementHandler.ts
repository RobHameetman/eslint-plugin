import { LabeledStatement } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeLabeledStatementHandler = () =>
	jest.fn(fakeHandlerFn<LabeledStatement>);
