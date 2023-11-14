import { NewExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeNewExpressionListener = () =>
	jest.fn(fakeListenerFn<NewExpression>);
