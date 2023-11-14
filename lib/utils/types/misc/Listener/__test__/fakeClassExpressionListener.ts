import { ClassExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeClassExpressionListener = () =>
	jest.fn(fakeListenerFn<ClassExpression>);
