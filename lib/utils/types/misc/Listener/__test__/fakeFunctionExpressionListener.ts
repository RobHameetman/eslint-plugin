import { FunctionExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeFunctionExpressionListener = () =>
	jest.fn(fakeListenerFn<FunctionExpression>);
