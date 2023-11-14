import { ThisExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeThisExpressionListener = () =>
	jest.fn(fakeListenerFn<ThisExpression>);
