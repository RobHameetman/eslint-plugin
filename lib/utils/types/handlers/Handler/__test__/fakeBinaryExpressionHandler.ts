import { BinaryExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeBinaryExpressionHandler = () =>
	jest.fn(fakeHandlerFn<BinaryExpression>);
