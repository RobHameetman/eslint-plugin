import { LabeledStatement } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeLabeledStatementListener = () =>
	jest.fn(fakeListenerFn<LabeledStatement>);
