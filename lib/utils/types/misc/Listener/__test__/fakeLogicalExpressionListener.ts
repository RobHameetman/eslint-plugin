import { LogicalExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeLogicalExpressionListener = () =>
	jest.fn(fakeListenerFn<LogicalExpression>);
