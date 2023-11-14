import { UnaryExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeUnaryExpressionListener = () =>
	jest.fn(fakeListenerFn<UnaryExpression>);
