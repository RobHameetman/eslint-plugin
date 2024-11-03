import { LogicalExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeLogicalExpressionHandler = () =>
	jest.fn(fakeHandlerFn<LogicalExpression>);
