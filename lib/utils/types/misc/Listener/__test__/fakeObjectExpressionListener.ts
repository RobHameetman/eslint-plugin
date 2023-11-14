import { ObjectExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeObjectExpressionListener = () =>
	jest.fn(fakeListenerFn<ObjectExpression>);
