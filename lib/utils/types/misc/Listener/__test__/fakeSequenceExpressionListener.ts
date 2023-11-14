import { SequenceExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeSequenceExpressionListener = () =>
	jest.fn(fakeListenerFn<SequenceExpression>);
