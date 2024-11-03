import { ClassExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeClassExpressionHandler = () =>
	jest.fn(fakeHandlerFn<ClassExpression>);
