import { ChainExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeChainExpressionListener = () =>
	jest.fn(fakeListenerFn<ChainExpression>);
