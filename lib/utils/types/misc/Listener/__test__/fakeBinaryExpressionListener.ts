import { BinaryExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeBinaryExpressionListener = () =>
	jest.fn(fakeListenerFn<BinaryExpression>);
