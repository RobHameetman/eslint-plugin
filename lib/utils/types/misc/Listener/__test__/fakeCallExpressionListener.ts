import { CallExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeCallExpressionListener = () =>
	jest.fn(fakeListenerFn<CallExpression>);
