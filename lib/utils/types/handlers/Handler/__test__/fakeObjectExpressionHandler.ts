import { ObjectExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeObjectExpressionHandler = () =>
	jest.fn(fakeHandlerFn<ObjectExpression>);
