import { YieldExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeYieldExpressionHandler = () =>
	jest.fn(fakeHandlerFn<YieldExpression>);
