import { ChainExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeChainExpressionHandler = () =>
	jest.fn(fakeHandlerFn<ChainExpression>);
