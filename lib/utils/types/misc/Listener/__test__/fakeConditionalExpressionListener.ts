import { ConditionalExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeConditionalExpressionListener = () =>
	jest.fn(fakeListenerFn<ConditionalExpression>);
