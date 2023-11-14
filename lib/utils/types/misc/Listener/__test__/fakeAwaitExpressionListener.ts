import { AwaitExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeAwaitExpressionListener = () =>
	jest.fn(fakeListenerFn<AwaitExpression>);
