import { YieldExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeYieldExpressionListener = () =>
	jest.fn(fakeListenerFn<YieldExpression>);
