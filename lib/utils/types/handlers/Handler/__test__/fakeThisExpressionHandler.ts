import { ThisExpression } from 'estree';
import { fakeHandlerFn } from './fakeHandlerGeneric';

export const fakeThisExpressionHandler = () =>
	jest.fn(fakeHandlerFn<ThisExpression>);
